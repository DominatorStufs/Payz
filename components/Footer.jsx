import Link from "next/link";
import Logo from "./Logo";
import { ModeToggle } from "./ModeToggle";
import { Computer } from "lucide-react";

export default function Footer() {
    return (
        <footer className="px-6 md:px-20 lg:px-32 mt-20 mb-10 grid gap-3">
            <div>
                <div className="flex items-center justify-between">
                    <Logo />
                    <span title="All System Normal" className="bg-background hover:bg-secondary transition select-none cursor-pointer flex items-center justify-center gap-1 text-xs rounded-full py-1 px-2 border">Normal<Computer className="h-3 w-3" /></span>
                </div>
                <p className="text-xs md:text-sm">Built using nextjs by <Link href="https://github.com/DominatorStufs" className="hover:text-primary hover:underline">☠️DOMINATOR☠️</Link><span className="text-primary">.</span></p>
            </div>
            <ul className="grid">
                <li className="-mb-1"><Link className="text-sm hover:underline hover:text-primary" href="https://wa.me/919968778724">Hire Me</Link></li>
                <li><Link className="text-sm hover:underline hover:text-primary" href="https://github.com/DominatorStufs/Payz">Fix this page</Link></li>
            </ul>
            <p className="text-xs">©{new Date().getFullYear()} All rights reserved<span className="text-primary">.</span></p>
        </footer>
    )
}
