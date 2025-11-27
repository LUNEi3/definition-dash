import Link from "next/link";


export default function Welcome() {
    return  (
        <section className="bg-white h-[65%] p-8 w-full self-end flex flex-col justify-around rounded-t-[3rem] drop-shadow-[0px_10px_40px_rgba(0,0,0,0.25)]">
            <div className="py-10">
                <h1 className="text-black text-center text-3xl font-extrabold">
                    Welcome To Definition Dash
                </h1>
                <p className="text-black p-5 text-center text-sm font-extralight opacity-60">
                    A classic mutiple-choice format, but the pressure is on the clock.
                </p>
            </div>
            <div className="py-10">
                <button className="bg-[#AAC4F5] text-white py-5 w-full rounded-full">
                    <Link href={"/sign-in"}>Get Start</Link>
                </button>
                <p className="text-black tracking-wide py-3 text-center text-sm font-medium opacity-40">
                    ALREADY HAVE AN ACCOUTN? <span className="text-[#AAC4F5]">LOG IN</span>
                </p>
            </div>
        </section>
    );
}
