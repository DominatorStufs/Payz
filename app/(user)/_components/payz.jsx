"use client"

import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import { toast } from "sonner";

export default function payz({ payz, showshare = true }) {
    return (
        <div className="flex gap-2 items-center justify-center">
            <span onClick={(e) => { navigator.clipboard.writeText(e.target.textContent); toast.success("payz copied!") }} className="bg-secondary border select-none hover:text-white px-4 py-2 text-sm rounded-full hover:bg-primary cursor-pointer transition">{payz}</span>
            {showshare && (
                <ModeToggle className="bg-transparent border-none"/>
            )}
            {/* <Button size="icon" className="rounded-full" onClick={() => { navigator.share({ title: "PayZ", url: "https://payzgo.vercel.app" }); }}><Share2 className="h-4 w-4" /></Button> */}
        </div>
    )
}
