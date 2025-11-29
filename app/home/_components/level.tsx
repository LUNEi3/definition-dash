import Link from "next/link";
import Image from "next/image";
import LevelCard from "./level-card";
import { decodeData } from "@/lib/utils/urlHelpers";

interface LevelProps {
    q: string;
}

const levels = [
    { text:"Easy", level: "A2", color:"C0FFBA" },
    { text:"Medium", level: "B1", color:"FFFDBA" },
    { text:"Hard", level: "C1", color:"FFBABB" },
    { text:"Expert", level: "C2", color:"727272" },
]

export default function Level({ q }: LevelProps) {
    const userData = decodeData(q ?? "") || {};

    return (
        <section className=" text-black h-screen flex flex-col">
            <nav className='fixed top-0 p-8 rotate-180'>
                <Link href={`/home?q=${q}&view=default`} className='w-full h-full'>
                    <Image  
                    src={"/icons/right-arrow.png"}
                    alt="Arrow Icon"
                    width={20}
                    height={20}
                    />
                </Link>
            </nav>
            <section className="h-[35%]  w-full pt-10 px-8 flex flex-col justify-center text-center">
                <h1 className="text-black text-center text-3xl font-semibold">
                    Choose the Level!
                </h1>
                <p className="text-black pb-5 pt-3 text-center text-sm font-light opacity-60">
                    Tackle harder levels to earn higher scores — the more difficult the level, the greater the reward.
                </p>
            </section>
            <section className="bg-white h-[65%] p-8 w-full self-end flex flex-col justify-center rounded-t-[3rem] drop-shadow-[0px_10px_40px_rgba(0,0,0,0.25)]">
                <div className="py-5">
                    
                    <p className="text-black text-center text-sm font-light opacity-60">
                        It must be something but I've no idea what to put here. . .
                    </p>
                </div>
                <div className="py-10 flex flex-col ">
                    {
                        levels.map((item, index) => (
                            <LevelCard text={item.text} level={item.level} color={item.color} key={index} q={q ?? ""} />
                        ))
                    }
                </div>
                <p className="p-3 text-center text-xs font-extralight opacity-60">
                    Tips: The more its hard, the more score you gain.
                </p>
            </section>
        
        </section>
    )
}