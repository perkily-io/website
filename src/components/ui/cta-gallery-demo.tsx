import { Button } from "@/components/ui/button";
import { 
  ContainerAnimated,
  ContainerStagger,
  GalleryGrid,
  GalleryGridCell,
} from "@/components/ui/cta-section-with-gallery";

const IMAGES = [
  "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2487&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580281657527-47e6b4cc1f1b?q=80&w=2400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1576765608236-d5d5a2931aeb?q=80&w=2400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512070800540-93166f87c9e3?q=80&w=2400&auto=format&fit=crop",
];

const CTAGalleryDemo = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 pb-6 sm:pb-12">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-2">
        <ContainerStagger>
          <ContainerAnimated className="mb-3 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            For practices and teams
          </ContainerAnimated>
          <ContainerAnimated className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Manage your practice in one place
          </ContainerAnimated>
          <ContainerAnimated className="my-4 text-base text-white/70">
            Appointments, AI notes, instant claims, patient CRM, analytics, and more — all connected so your workflow just flows.
          </ContainerAnimated>
          <ContainerAnimated>
            <div className="flex gap-3">
              <a href="/perkily-pro">
                <Button className="px-6">Explore Perkily Pro</Button>
              </a>
              <a href="/contact">
                <Button variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white/10">Talk to us</Button>
              </a>
            </div>
          </ContainerAnimated>
        </ContainerStagger>

        <GalleryGrid>
          {IMAGES.map((imageUrl, index) => (
            <GalleryGridCell index={index} key={index}>
              <img
                className="size-full object-cover object-center"
                width="100%"
                height="100%"
                src={imageUrl}
                alt="Perkily Pro gallery image"
                loading="lazy"
              />
            </GalleryGridCell>
          ))}
        </GalleryGrid>
      </div>
    </section>
  );
};

export default CTAGalleryDemo;

