'use client'

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from 'react';
import { redirect } from "next/navigation";
import SynonymCard from "./sysnonym-card";


interface SynonymProps {
    level: string,
    backUrl: string
}

export default function Synonym({ level, backUrl } : SynonymProps) {


    const cards = [
        { word: "Hello World" },
        { word: "It's so COLD!!" },
        { word: "Need a hot coffee" },
        { word: "Need a hot coffee" },
        { word: "Need a hot coffee" },
    ]
    const [timeLeft, setTimeLeft] = useState(60);
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        if (isActive && timeLeft > 0) {
            // Create the interval
            interval = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            // Timer finished logic
            setIsActive(false);
            // Optional: Trigger an action here (e.g., submit quiz)
            redirect(backUrl)
        }

        return () => {
            if (interval) clearInterval(interval);
        };

    }, [isActive, timeLeft])

    const addTime = () => {
        setTimeLeft((prevTime) => prevTime + 2);
        // console.log(timeLeft)
    }

    const handleClickBack = () => {
        setTimeLeft(0);
        redirect(backUrl);
    }

    return (
        <section className="flex flex-col h-screen justify-end text-black">
            <nav className='fixed top-0 p-8 rotate-180'>
                <button onClick={handleClickBack} className='w-full h-full'>
                    <Image  
                    src={"/icons/right-arrow.png"}
                    alt="Arrow Icon"
                    width={20}
                    height={20}
                    />
                </button>
            </nav>
            <section className="bg-white h-[90%] p-8 w-full self-end flex flex-col justify-start rounded-t-[3rem] drop-shadow-[0px_10px_40px_rgba(0,0,0,0.25)]">
                <div className="text-right opacity-60 font-bold text-xl">{timeLeft}s</div>
                <div className="pb-5">
                    <h1 className="font-black text-xl py-2">
                        Synonym <span className="opacity-60 font-normal">({level})</span>
                    </h1>
                    <h2 className="text-black text-left text-base font-bold">
                        What is the synonym of "" ?
                    </h2>
                </div>
                <div className="py-5 flex flex-col ">
                    {
                        cards.map((item, index) => (
                            <button onClick={addTime} key={index}>
                                <SynonymCard />
                            </button>
                        ))
                    }
                </div>
                <p className="p-3 text-center text-xs font-extralight opacity-60">
                    Tips: correct +2 second, incorrect -3 second.
                </p>
            </section>
        </section>
    );
}