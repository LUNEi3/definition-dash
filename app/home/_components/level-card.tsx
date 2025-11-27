interface CardProps {
    text: string, level: string, color: string
}

export default function LevelCard({ text, level, color }: CardProps) {

    return (
        <div style={{ backgroundColor: `#${color}` }} className="text-center py-2 my-3 rounded-full">
            <p>
                <span className="font-bold">{text}</span>({level})
            </p>
        </div>
    );
}