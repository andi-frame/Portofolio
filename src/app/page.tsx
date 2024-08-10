import Navbar from "./_components/Navbar";
import Landing from "./_components/Landing";
import MinatBakat from "./_components/MinatBakat";
import Experience from "./_components/Experience";
import Pencapaian from "./_components/Pencapaian";
import Projects from "./_components/Projects";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Landing />
      <MinatBakat />
      <Experience />
      <Pencapaian />
      <Projects />
      <Footer />
    </main>
  );
}
