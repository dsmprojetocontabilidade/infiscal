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