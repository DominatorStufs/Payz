import PaymentForm from "@/app/(user)/_components/PaymentForm";

export const metadata = {
    title: "PayZ",
    description: "Transfer Z securely anywhere in the world.",
}

export default function Page() {
    return (
        <div>
            <PaymentForm />
        </div>
    )
}
