import NavBar from "@/components/NavBar";
import Dashboard from "@/components/Dashboard";
import Statistic from "@/components/Statistic";
export default function Home() {
  return (
    <div className="w-full max-w-7xl mx-auto min-h-screen flex flex-col items-center justify-start gap-4 ">
      <NavBar/>
      <main className="w-full grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
        <Dashboard/>
        <Statistic/>
      </main>
    </div>
  );
}
