import BackgroundVideo from "@/components/BackgroundVideo";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="py-2">
      <div className="container mx-auto px-3 overflow-hidden">
        <BackgroundVideo />
        <InfiniteMarquee />
      </div>
      <div id="service" className="">
        <Services />
      </div>
      <div id="faq" className="">
        <FAQ />
      </div>
      <div id="contact" className="bg-white">
        <ContactForm />
      </div>
    </div>
  );
}
