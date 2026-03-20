import { getInstagramMedia } from "@/lib/instagram";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Commission from "@/components/Commission";

export default async function Home() {
  const media = await getInstagramMedia();

  return (
    <>
      <Navbar />
      <main>
        <Hero peekItems={media} />
        <Gallery items={media} />
        <About />
        <Commission />
      </main>
    </>
  );
}
