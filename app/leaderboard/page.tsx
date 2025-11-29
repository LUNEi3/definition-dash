import { decodeData } from "@/lib/utils/urlHelpers";
import Link from "next/link";


export default async function Leaderboard({ searchParams } : { searchParams: { q?: string }} ) {
    const { q } = await searchParams;
    const userData = decodeData(q ?? "") || {};
    const backUrl = `/home?q=${q}&view=default`;
    console.log(userData)
    return (
        <main className="bg-white">
            <section className='flex flex-col p-8 h-screen justify-center'>
                <div className='text-black text-center'>
                    <h1 className='text-3xl font-extrabold py-5'>
                        Your Score is {userData.score}!
                    </h1>
                    <p className='text-sm font-light opacity-60'>
                        The leaderboard feature is under inplementation...
                    </p>
                </div>
                <Link href={backUrl} className='bg-[#AAC4F5] text-white text-center my-5 py-5 w-full rounded-full'>
                    Back
                </Link>

            </section>
        </main>
    );
}