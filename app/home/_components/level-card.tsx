import Link from "next/link";

interface CardProps {
    text: string, level: string, color: string, q: string
}

export default function LevelCard({ text, level, color, q }: CardProps) {

    return (
        <Link  style={{ backgroundColor: `#${color}` }} href={`/game?q=${q}&level=${level}`} className="text-center py-2 my-3 rounded-full">
            <p>
                <span className="font-bold">{text}</span>
                ({level})
            </p>
        </Link>
    );
}