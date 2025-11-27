import Image from "next/image";
import Link from "next/link";

interface StartProps {
    name: string;
}

export default function Default({ name }: StartProps) {
    return (
        <section className="p-8 flex flex-col text-black h-screen justify-center text-center">
            <h1 className="text-3xl font-extrabold">
                Hi {name}, Welcome <br></br> <span className="font-normal">to Definition Dash</span>
            </h1>
            <p className="py-3 text-sm font-light opacity-60">
                This is my Final Project of Software Engineering class (CS436). Hope this shit is working and Thank you for visiting!
            </p>
            <div className="w-full h-2/5 relative left-[-1rem]">
                <Image 
                src={"/icons/thinking.png"}
                alt="Women thinking image"
                fill
                />
            </div>
            <div className="flex flex-col">
                <button className="bg-[#AAC4F5] text-white py-5 w-full rounded-full">
                    <Link href={`home?name=${name}&veiw=level`}>Get Started!</Link>
                </button>
                <Link href={`/`} className="pt-4 text-sm font-medium opacity-40">Logout</Link>
            </div>
        </section>
    );
}