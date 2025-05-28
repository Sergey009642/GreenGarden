import SwiperGallery from "../Componet/SwiperImges";
import SwiperRoom from "../Componet/SwiperRoom";

export default function Home() {
    return (
        <div className="w-full h-full bg-[url('/Home7.jpg')] bg-cover bg-center">
        <div className="flex justify-center items-center pt-[100px] max-sm:flex-col">
            <SwiperGallery/>
            <SwiperRoom/>
    </div>
</div>    
    )
}