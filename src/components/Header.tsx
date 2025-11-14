import Image from "next/image"

export const Header = () => {
    return (
        <header className="h-[70px] flex justify-between bg-zinc-900 p-4">
            <div className="">
                <Image src="assets/logo.svg" width={100} height={50} alt="Logo InFiscal" />
            </div>
            <div>Lista de acumuladores</div>
        </header>
    )
}