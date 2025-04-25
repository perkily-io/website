import { supabase } from '@/lib/supabase';

interface Practice {
  id: string;
  name: string;
  setup_completed: boolean;
  created_at: string;
}

interface PracticeMember {
  id: string;
  practice_id: string;
  role: string;
  created_at: string;
}

class PracticeService {
  private static instance: PracticeService;
  private debounceTimeout: NodeJS.Timeout | null = null;
  private lastLoadTime: Date | null = null;
  private cachedPracticeId: string | null = null;

  private constructor() {}

  public static getInstance(): PracticeService {
    if (!PracticeService.instance) {
      PracticeService.instance = new PracticeService();
    }
    return PracticeService.instance;
  }

  private async loadPracticeMembers(userId: string): Promise<PracticeMember[]> {
    const { data, error } = await supabase
      .from('practice_members')
      .select('id, practice_id, role, created_at')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error loading practice members:', error);
      throw error;
    }

    return data || [];
  }

  private async loadPractice(practiceId: string): Promise<Practice> {
    const { data, error } = await supabase
      .from('practices')
      .select('id, name, setup_completed, created_at')
      .eq('id', practiceId)
      .single();

    if (error) {
      console.error('Error loading practice:', error);
      throw error;
    }

    return data;
  }

  public async loadPracticeForUser(userId: string): Promise<Practice | null> {
    console.log('Loading practice for user:', userId);

    // If we have a cached practice ID and it's been less than 5 minutes, use it
    if (this.cachedPracticeId && this.lastLoadTime && 
        (new Date().getTime() - this.lastLoadTime.getTime()) < 300000) {
      console.log('Using stored practice ID:', this.cachedPracticeId);
      return this.loadPractice(this.cachedPracticeId);
    }

    try {
      // Get all practices the user is a member of
      const practiceMembers = await this.loadPracticeMembers(userId);
      
      if (practiceMembers.length === 0) {
        return null;
      }

      // If user has multiple practices, prioritize:
      // 1. The most complete practice
      // 2. The most recently created practice
      let selectedPracticeMember = practiceMembers[0];

      if (practiceMembers.length > 1) {
        // Load all practices to check their setup status
        const practices = await Promise.all(
          practiceMembers.map(pm => this.loadPractice(pm.practice_id))
        );

        // Find the most complete and recent practice
        const completePractices = practices.filter(p => p.setup_completed);
        if (completePractices.length > 0) {
          // Use the most recent complete practice
          const mostRecentComplete = completePractices.reduce((prev, curr) => 
            new Date(curr.created_at) > new Date(prev.created_at) ? curr : prev
          );
          selectedPracticeMember = practiceMembers.find(
            pm => pm.practice_id === mostRecentComplete.id
          )!;
        } else {
          // If no complete practices, use the most recent practice
          const mostRecent = practices.reduce((prev, curr) => 
            new Date(curr.created_at) > new Date(prev.created_at) ? curr : prev
          );
          selectedPracticeMember = practiceMembers.find(
            pm => pm.practice_id === mostRecent.id
          )!;
        }
      }

      // Cache the selected practice ID
      this.cachedPracticeId = selectedPracticeMember.practice_id;
      this.lastLoadTime = new Date();

      return this.loadPractice(selectedPracticeMember.practice_id);
    } catch (error) {
      console.error('Error in loadPracticeForUser:', error);
      throw error;
    }
  }

  public async loadPracticeWithDebounce(userId: string): Promise<Practice | null> {
    console.log('Debouncing practice load request');
    
    return new Promise((resolve, reject) => {
      if (this.debounceTimeout) {
        clearTimeout(this.debounceTimeout);
      }

      this.debounceTimeout = setTimeout(async () => {
        console.log('Starting practice load at:', new Date().toISOString());
        try {
          const practice = await this.loadPracticeForUser(userId);
          resolve(practice);
        } catch (error) {
          reject(error);
        }
      }, 300); // 300ms debounce
    });
  }
}

export const practiceService = PracticeService.getInstance(); 