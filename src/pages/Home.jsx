import Hero from "@/components/sections/Hero";
import LatestSet from "@/components/sections/LatestSet";
import UpcomingEvents from "@/components/sections/UpcomingEvents";
import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <LatestSet />
      <UpcomingEvents />
      <About />
      <Gallery />
    </>
  );
}