import Link from "next/link";

interface CardProps {
    text: string, level: string, color: string, q: string
}

export default function LevelCard({ text, level, color, q }: CardProps) {

    return (
        <div style={{ backgroundColor: `#${color}` }} className="text-center py-2 my-3 rounded-full">
            <p>
                <Link href={`/game?q=${q}&level=${level}`}>
                    <span className="font-bold">{text}</span>({level})
                </Link> 
            </p>
        </div>
    );
}