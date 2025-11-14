import { Tabela } from "@/components/Tabela";

export default function Home() {
  return (
    <main className="flex-1 bg-zinc-900 flex-col p-10 text-white">
      <div className="flex flex-col">
        <div className="flex flex-col p-0 mt-6 mb-6 gap-2">
          <h1 className="text-2xl mb-4 text-white leading-0"> 📑Acumuladores cadastrados na Domínio</h1>
          <h3 className="text-sm leading-0 ml-8">Guia de consulta rápida</h3>
        </div>
        <Tabela />
      </div>
    </main>
  );
}
