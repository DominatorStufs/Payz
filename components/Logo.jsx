import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/">
            <h1 className="select-none text-3xl font-bold">Pay<span className="text-primary">Z</span></h1>
        </Link>
    )
}
