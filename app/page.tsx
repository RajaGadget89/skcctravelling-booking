import NavBar from "../components/NavBar";
import HeroVideo from "../components/HeroVideo";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <NavBar />
      <HeroVideo />
      {/* Placeholder for Trip List section */}
      <section id="trip-list" className="w-full min-h-[400px] bg-gray-50 flex items-center justify-center">
        <div className="text-2xl text-blue-900 font-semibold opacity-60">Trip List Coming Soon...</div>
      </section>
    </div>
  );
}
