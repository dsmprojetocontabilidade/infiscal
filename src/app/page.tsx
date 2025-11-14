import { Tabela } from "@/components/Tabela";

export default function Home() {
  return (
    <main className="flex-1 bg-zinc-900 flex-col p-4">
      <div className="flex flex-col">
        <h1 className="text-2xl mb-4 text-white">Acumuladores</h1>
        <Tabela />
      </div>
    </main>
  );
}
