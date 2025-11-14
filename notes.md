### TABELA COM BUSCA
"use client";

import { useMemo, useState } from "react";
import type { Acumulador } from "@/data/Acumuladores";
import { acumuladores } from "@/data/Acumuladores";

export function TabelaCliente({ data = acumuladores }: { data?: Acumulador[] }) {
  const [q, setQ] = useState("");

  const filtrados = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return data;

    return data.filter(a =>
      String(a.cod).includes(query) ||
      a.cfop.toLowerCase().includes(query) ||
      a.desc.toLowerCase().includes(query)
    );
  }, [q, data]);

  return (
    <div className="space-y-4">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Pesquisar por código, CFOP ou descrição…"
        className="w-full rounded px-3 py-2 text-black"
      />

      <table className="table-fixed text-white w-full border-separate border-spacing-y-1">
        <thead className="text-left">
          <tr>
            <th className="px-3 py-2">Acumulador</th>
            <th className="px-3 py-2">CFOP</th>
            <th className="px-3 py-2">Descrição</th>
          </tr>
        </thead>
        <tbody>
          {filtrados.map(({ cod, cfop, desc }) => (
            <tr key={cod} className="odd:bg-zinc-800 even:bg-zinc-700">
              <td className="px-3 py-2">{cod}</td>
              <td className="px-3 py-2">{cfop}</td>
              <td className="px-3 py-2">{desc}</td>
            </tr>
          ))}
          {filtrados.length === 0 && (
            <tr>
              <td className="px-3 py-6 text-center" colSpan={3}>
                Nada encontrado para “{q}”
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

### USANDO
import { TabelaCliente } from "@/components/TabelaCliente";

export default function Page() {
  return (
    <main className="p-6">
      <h1 className="text-2xl mb-4 text-white">Acumuladores</h1>
      <TabelaCliente />
    </main>
  );
}


### TABELA SIMPLES
// (server component por padrão)
import type { Acumulador } from "@/data/Acumuladores";
import { acumuladores } from "@/data/Acumuladores";

export function Tabela({ data = acumuladores }: { data?: Acumulador[] }) {
  return (
    <table className="table-fixed text-white w-full border-separate border-spacing-y-1">
      <thead className="text-left">
        <tr>
          <th className="px-3 py-2">Acumulador</th>
          <th className="px-3 py-2">CFOP</th>
          <th className="px-3 py-2">Descrição</th>
        </tr>
      </thead>

      <tbody>
        {data.map(({ cod, cfop, desc }) => (
          <tr key={cod} className="odd:bg-zinc-800 even:bg-zinc-700">
            <td className="px-3 py-2">{cod}</td>
            <td className="px-3 py-2">{cfop}</td>
            <td className="px-3 py-2">{desc}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

### USANDO
import { Tabela } from "@/components/Tabela";

export default function Page() {
  return (
    <main className="p-6">
      <h1 className="text-2xl mb-4 text-white">Acumuladores</h1>
      <Tabela />
    </main>
  );
}
