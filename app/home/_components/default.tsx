import Image from "next/image";
import Link from "next/link";
import { decodeData } from "@/lib/utils/urlHelpers";

interface StartProps {
    q: string;
}

export default function Default({ q }: StartProps) {
    const userData = decodeData(q ?? "") || {};
    return (
        <section className="p-8 flex flex-col text-black h-screen justify-center text-center">
            <h1 className="text-3xl font-extrabold">
                Hi {userData.name}, Welcome <br></br> <span className="font-normal">to Definition Dash</span>
            </h1>
            <p className="py-3 text-sm font-light opacity-60">
                This is my Final Project of Software Engineering class (CS436). Hope this shit is working and Thank you for visiting!
            </p>
            <div className="w-full aspect-square h-2/5 relative left-[-1rem] m-auto ">
                <Image 
                className="object-contain "
                src={"/icons/thinking.png"}
                alt="Women thinking image"
                fill
                />
            </div>
            <div className="flex flex-col">
                <Link href={`home?q=${q}&view=level`} className="bg-[#AAC4F5] text-white py-5 w-full rounded-full">
                    Get Started!
                </Link>
                <Link href={`/`} className="pt-4 text-sm font-medium opacity-40">Logout</Link>
            </div>
        </section>
    );
}