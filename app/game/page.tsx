import { decodeData } from "@/lib/utils/urlHelpers";
import Synonym from "./_components/game-synonym ";
import { redirect } from "next/navigation";

export default async function GamePage({ searchParams } : { searchParams: { q?: string, level?: string }} ) {
    const { q, level } = await searchParams;

    const backUrl = `/home?q=${q}&view=default`;
    
    return (
        <main className="bg-[#FFF8DE]">
            <Synonym backUrl={backUrl} level={level ?? ""} />
        </main>
    );
}