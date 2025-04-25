
import React from 'react';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Fleming AI has revolutionized how I manage my patients' care. The insights are invaluable.",
      author: "Dr. Sarah Johnson",
      role: "Cardiologist",
      rating: 5,
    },
    {
      quote: "The appointment booking system is seamless. Best healthcare experience I've ever had.",
      author: "Michael Chen",
      role: "Patient",
      rating: 5,
    },
    {
      quote: "The rewards system actually motivates me to stay on top of my health goals.",
      author: "Emma Thompson",
      role: "Patient",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Healthcare <span className="text-gradient-blue">Professionals</span>
          </h2>
          <p className="text-perkily-light-gray max-w-2xl mx-auto">
            Join thousands of healthcare providers and patients who are transforming healthcare with Perkily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-card p-8 relative overflow-hidden group hover:glow transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-perkily-blue/5 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:bg-perkily-blue/10 transition-all duration-500"></div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-perkily-blue text-perkily-blue" />
                ))}
              </div>
              
              <blockquote className="text-lg mb-6">"{testimonial.quote}"</blockquote>
              
              <footer>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-perkily-light-gray">{testimonial.role}</div>
              </footer>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
