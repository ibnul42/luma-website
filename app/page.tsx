import BackgroundVideo from "@/components/BackgroundVideo";
import ImageScroller from "@/components/ImageScroller";

export default function Home() {
  return (
    <div className="py-2">
      <div className="container mx-auto px-3">
        <BackgroundVideo />
        <div className="relative">
          <div className="absolute left-0 top-0 w-full h-40 z-20 flex pointer-events-none">
            <div className="w-1/2 h-full bg-gradient-to-l from-transparent to-black/90"></div>
            <div className="w-1/2 h-full bg-gradient-to-r from-transparent to-black/90"></div>
          </div>
          <ImageScroller />
        </div>
      </div>
    </div>
  );
}
