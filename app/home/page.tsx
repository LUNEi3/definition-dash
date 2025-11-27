import Image from "next/image";
import Link from "next/link";
import Default from "./_components/default";
import Level from "./_components/level";


export default async function Page({
  searchParams,
}: {
  searchParams: { name?: string, veiw: string}
}) {
    const { name, veiw } = await searchParams
    // console.log(name,veiw)
    return (
        <main className="bg-[#FFF8DE]">
            {veiw === "default" && <Default name={name ?? ""}></Default>}
            {veiw === "level" && <Level name={name ?? ""}></Level>}
        </main>
    );
}