import Image from "next/image";
import Link from "next/link";
import Default from "./_components/default";
import Level from "./_components/level";
import { redirect } from "next/navigation";
import { decodeData } from "@/lib/utils/urlHelpers";
import { use } from "react";

export default async function Page({
  searchParams,
}: {
  searchParams: { q?: string, view: string}
}) {
    const { q, view } = await searchParams;
    const userData = await decodeData(q ?? "") || {};

    if (view !== "default" && view !== "level") {
        redirect("/");
    }

    // console.log(name, view)
    return (
        <main className="bg-[#FFF8DE]">
            {view === "default" && <Default q={q ?? ""}></Default>}
            {view === "level" && <Level q={q ?? ""}></Level>}
        </main>
    );
}