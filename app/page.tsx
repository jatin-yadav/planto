import Navbar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-5xl">Planto: Breath Natural</h1>
      </section>
    </div>
  );
}
