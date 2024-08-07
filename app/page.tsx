import Image from "next/image";
import HomeBackgroundGrid from "@/assets/images/home-bg-grid.svg"

export default function Home() {
  return (
    <main>

      <section className="h-[100vh] w-[100vw]">
        <Image src={HomeBackgroundGrid} alt="Background image" />
      </section>
      
    </main>
  );
}
