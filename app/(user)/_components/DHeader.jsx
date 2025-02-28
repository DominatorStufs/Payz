import { Skeleton } from "@/components/ui/skeleton";
import { ClerkLoaded, ClerkLoading, UserButton, currentUser } from "@clerk/nextjs";
import payz from "./payz";
import { CreateAccount } from "@/lib/create";

export default async function DHeader() {
    const user = await currentUser();
    const payz = user?.emailAddresses[0]?.emailAddress?.split("@")[0] + "@payz";

    return (
        <header className="flex items-center justify-between py-6 px-6 md:px-20 lg:px-32">
            <div>
                <ClerkLoaded>
                    <UserButton afterSignOutUrl="/" />
                </ClerkLoaded>
                <ClerkLoading>
                    <Skeleton className="h-8 w-8 rounded-full" />
                </ClerkLoading>
            </div>
            <div>
                {!payz ? (
                    <Skeleton className="h-8 w-32 rounded-full" />
                ) : (
                    <payz payz={payz} />
                )}
            </div>
        </header>
    )
}
