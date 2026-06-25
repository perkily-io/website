import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RevealOnView } from './RevealOnView';

const products = [
  {
    tag: 'AskFleming',
    title: 'Evidence-first medical copilot',
    description: 'Plain-language education, learning, and clinician workflows — with citations you can trust.',
    href: '/fleming',
    accent: 'teal',
  },
  {
    tag: 'ClinicalOS',
    title: 'AI that runs your practice',
    description: 'Scheduling, notes, claims, and follow-up — unified in one calm operating system.',
    href: '/clinicalos',
    accent: 'amber',
  },
];

export function ProductsSplit() {
  return (
    <section id="products" className="py-28 md:py-40 bg-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <RevealOnView className="max-w-2xl mb-16 md:mb-20">
          <p className="text-sm font-medium text-teal uppercase tracking-wider mb-4">Two products</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-ink tracking-tight text-balance">
            Choose your door
          </h2>
          <p className="mt-4 text-lg text-ink-muted leading-relaxed">
            One ecosystem for medical reasoning and practice operations.
          </p>
        </RevealOnView>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <RevealOnView key={product.tag} delay={index * 0.1}>
              <Link
                to={product.href}
                className="group relative flex flex-col justify-between min-h-[320px] rounded-[2rem] border border-ink/10 bg-paper p-8 sm:p-10 shadow-warm hover:shadow-warm-lg hover:-translate-y-1 transition-all duration-500 ease-out-expo"
              >
                <div>
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider ${
                      product.accent === 'teal'
                        ? 'bg-teal-light text-teal'
                        : 'bg-amber-wash text-amber'
                    }`}
                  >
                    {product.tag}
                  </span>
                  <h3 className="mt-6 font-display text-3xl sm:text-4xl font-light text-ink tracking-tight">
                    {product.title}
                  </h3>
                  <p className="mt-4 text-ink-muted leading-relaxed max-w-md">
                    {product.description}
                  </p>
                </div>
                <div className="mt-8 inline-flex items-center text-sm font-medium text-teal group-hover:gap-3 gap-2 transition-all">
                  Explore {product.tag}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </RevealOnView>
          ))}
        </div>
      </div>
    </section>
  );
}
