import Dashboard from "./dashboard/page";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen pb-20 font-[family-name:var(--font-geist-sans)]">
      <main>
      <Dashboard />
      </main>
    </div>
  );
}
