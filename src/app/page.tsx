import { Tabela } from "@/components/Tabela";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 bg-zinc-900 flex-col p-10 text-white">
      <div>
        <ol>
          <li>1. <Link href="/acumuladores">Acumuladores</Link></li>
          <li>2. EFD-REINF</li>
        </ol>
      </div>
    </main>
  );
}
