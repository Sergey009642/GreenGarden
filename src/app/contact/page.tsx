import Contact from "../Componet/contact";
import MapContact from "../Componet/map";

export default function Home() {
    return(
        <div className="w-full h-full bg-[#333]">
        <div className="flex justify-center items-center gap-[20px] pt-[140px] max-sm:flex-col">
            <Contact/>
            <MapContact/>
        </div>
        </div>
    )
}
