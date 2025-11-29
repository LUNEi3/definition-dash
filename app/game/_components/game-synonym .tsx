'use client'

import Image from "next/image";
import { useState, useEffect, use } from 'react';
import { redirect } from "next/navigation";
import { GameQuestion } from "@/lib/utils/gameHelpers";
import { decodeData, encodeData } from "@/lib/utils/urlHelpers";

interface SynonymProps {
    q: string,
    level: string,
    initialQuestions: GameQuestion[]
}

export default function Synonym({ q, level, initialQuestions } : SynonymProps) {

    const backUrl = `/home?q=${q}&view=default`;
    const userData = decodeData(q ?? "") || {};
    const [timer, setTimer] = useState(60);
    const [isActive, setIsActive] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [timerColor, setTimerColor] = useState("text-black");
    const [choiceBG, setChoiceBG] = useState("bg-white");

    const currentQuestion = initialQuestions[currentIndex];

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        if (isActive && timer > 0) {
            // Create the interval
            interval = setInterval(() => {
                setTimer((prevTime) => prevTime - 1);
            }, 1000);
        } else if (timer === 0) {
            // Timer finished logic
            goLeaderboard();
        }

        return () => { if (interval) clearInterval(interval); };

    }, [isActive, timer])

    const handleAnswerClick = (choice: string) => {
        if (!isActive) return;

        if (choice === currentQuestion.correctAnswer) {
            setScore(prev => prev + 1);
            setTimer(prev => prev + 2);
            setTimerColor("text-green-600");
            setChoiceBG("bg-[#C0FFBA]");
            setTimeout(() => {
                setTimerColor("text-black");
                setChoiceBG("bg-white");
            }, 500);
        } else {
            setScore(prev => Math.max(0, prev - 1));
            setTimer(prev => Math.max(0, prev - 3));
            setTimerColor("text-red-600");
            setChoiceBG("bg-[#FFBABB]")
            setTimeout(() => {
                setTimerColor("text-black");
                setChoiceBG("bg-white");
            }, 500);
        }

        if (currentIndex < initialQuestions.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            // No more questions! End game early?
            // Or just loop/shuffle again (simple: end game)
            goLeaderboard();
        }
    }

    const handleClickBack = () => {
        setTimer(0);
        redirect(backUrl);
    }

    const goLeaderboard = () => {
        const newUserData = encodeData({
            name: userData.name,
            score: score,
            level: level
        })
        setTimer(0);
        setIsActive(false);
        redirect(`/leaderboard?q=${newUserData}`); 
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
                <div className={`text-right opacity-60 font-bold text-xl ${timerColor}`}>{timer}s</div>
                <div className="pb-5">
                    <h1 className="font-black text-xl py-2">
                        Synonym <span className="opacity-60 font-normal">({level})</span>
                    </h1>
                    <h2 className="text-black text-left text-base font-bold ">
                        What is the synonym of "{currentQuestion.word}" ?
                    </h2>
                </div>
                <div className="py-5 flex flex-col ">
                    {currentQuestion.choices.map((choice, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswerClick(choice)}
                            className={`text-center py-3 border border-gray-400 rounded-full my-4 
                            ${choiceBG} hover:cursor-pointer transition-colors`}
                        >
                            {choice}
                        </button>
                    ))}
                </div>
                <p className="p-3 text-center text-xs font-extralight opacity-60">
                    Tips: correct +2 second, incorrect -3 second.
                </p>
            </section>
        </section>
    );
}