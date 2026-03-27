import {Button} from "@/components/ui/button";

export default function Footer() {
    return(
        <div className="top-18 left-18 grid h-18 grid-cols-2 content-center gap-10 w-full bg-orange-500 text-2xl text-white">
            <div className="">
                <Button className="bg-amber-500 text-4xl text-white">
                    Options
                </Button>
            </div>
            <div className="">
                <Button className="bg-amber-500 px-2 py-2 h-14 w-45 text-4xl text-white" >
                    Skills
                </Button>
            </div>
        </div>
    )
}