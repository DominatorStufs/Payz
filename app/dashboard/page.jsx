import Account from "../_components/Account";
import DFooter from "../_components/DFooter";
import DHeader from "../_components/DHeader";


export default function Page() {
    return(
        <div>
                {/* <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-15 blur-[100px]"></div></div> */}
                <DHeader />
                <Account />
                <DFooter/>
            </div>
    )
}