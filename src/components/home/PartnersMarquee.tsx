import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import { RevealOnView } from './RevealOnView';

const partners = [
  'ONT Health',
  'Medikredit',
  'AskFleming',
  'MedPrax',
  'PubMed',
  'OpenFDA',
  'Guideline Search',
  'ClinicalTrials.gov',
  'Scholar Gateway',
  'bioRxiv',
  'CMS Coverage',
  'ChEMBL',
];

export function PartnersMarquee() {
  return (
    <section className="border-y border-ink/10 bg-paper/50 py-8">
      <RevealOnView>
        <div className="group relative mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center md:flex-row">
            <div className="md:max-w-44 md:border-r md:border-ink/10 md:pr-6 mb-4 md:mb-0">
              <h2 className="text-end text-sm font-medium text-ink-faint">Trusted by</h2>
            </div>
            <div className="relative py-2 md:w-[calc(100%-11rem)]">
              <InfiniteSlider durationOnHover={20} duration={40} gap={112}>
                {partners.map((name) => (
                  <div key={name} className="flex items-center gap-2 text-ink-faint">
                    <span className="font-medium text-sm whitespace-nowrap">{name}</span>
                  </div>
                ))}
              </InfiniteSlider>

              <div className="bg-gradient-to-r from-ivory absolute inset-y-0 left-0 w-20 pointer-events-none" />
              <div className="bg-gradient-to-l from-ivory absolute inset-y-0 right-0 w-20 pointer-events-none" />
              <ProgressiveBlur
                className="pointer-events-none absolute left-0 top-0 h-full w-20"
                direction="left"
                blurIntensity={1}
              />
              <ProgressiveBlur
                className="pointer-events-none absolute right-0 top-0 h-full w-20"
                direction="right"
                blurIntensity={1}
              />
            </div>
          </div>
        </div>
      </RevealOnView>
    </section>
  );
}
