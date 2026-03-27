import {Button} from "@/components/ui/button";

export default function Header() {
    return(
        <div className="flex justify-center items-center h-18 bg-orange-500 text-4xl text-white">
            A perfect Header
            <div className="flex items-center px-2">
                <Button className="bg-amber-500 h-14 w-14 text-2xl text-white" >
                    Usr
                </Button>
            </div>
        </div>
    )
}