
import Synonym from "./_components/game-synonym ";
import { generateGameBatch } from "@/lib/utils/gameHelpers";

export default async function GamePage({ searchParams } : { searchParams: { q?: string, level?: string }} ) {
    const { q, level } = await searchParams;   
    const questions = generateGameBatch(50, level || "Mixed");
            
    return (
        <main className="bg-[#FFF8DE]">
            <Synonym 
                q={q ?? ""}
                level={level ?? ""}
                initialQuestions={questions}
            />
        </main>
    );
}