import { Button } from "@/components/ui/button";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const CTAGalleryDemo = () => {
  return (
    <section 
      className="mx-auto w-full max-w-7xl"
      style={{ backgroundColor: "#000000" }}
    >
      <div 
        className="flex flex-col overflow-hidden"
        style={{ backgroundColor: "#000000" }}
      >
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-white">
                Precision Billing. <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Zero Leaks.
                </span>
              </h1>
              <p className="my-4 text-base text-white/80 max-w-2xl mx-auto">
            Stop chasing claims. ClinicalOS maps clinical encounters to codes with surgical accuracy. From real-time eligibility checks to AI-powered claim generation, we've turned the back office into a high-performance engine.
              </p>
              <div className="flex gap-3 justify-center mt-6">
              <a href="/perkily-pro">
                <Button className="px-6">Explore Perkily Pro</Button>
              </a>
              <a href="/contact">
                <Button variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white/10">Talk to us</Button>
              </a>
            </div>
            </>
          }
        >
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=720&fit=crop&q=75"
            alt="Financial Engine Dashboard"
            className="object-cover h-full w-full"
            style={{ backgroundColor: "#000000" }}
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </section>
  );
};

export default CTAGalleryDemo;

