import NavBar from "@/components/NavBar";
import Dashboard from "@/components/Dashboard";
import Statistic from "@/components/Statistic";
export default function Home() {
  return (
    <div className="min-h-screen w-full max-w-7xl mx-auto  flex flex-col items-center justify-start gap-4 ">
      <NavBar/>
      <main className="w-full grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 pb-2">
        <Dashboard/>
        <Statistic/>
      </main>
    </div>
  );
}

