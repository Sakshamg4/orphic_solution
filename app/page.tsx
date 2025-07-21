import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";



export default function Home() {
  return (
    <div className="bg-noise-light h-screen">
      <Navbar />
      <Hero/>
    </div>
  );
}
