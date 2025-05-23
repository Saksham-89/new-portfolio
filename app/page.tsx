
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/Navbar";
import RecentProjects from "@/components/ui/RecentProjects";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full mx-auto">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experiences />
        <Footer/>
      </div>
    </main>
  );
}
