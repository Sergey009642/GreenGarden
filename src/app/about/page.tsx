import SwiperGallery from "../Componet/SwiperImges";
import SwiperRoom from "../Componet/SwiperRoom";

export default function Home() {
    return (
        <div className="w-full h-[120vh] bg-[url('/Home7.jpg')] bg-cover bg-center">
        <div className="flex justify-center items-center pt-[180px] max-sm:flex-col gap-[50px]">
            <SwiperGallery/>
            <SwiperRoom/>
    </div>
</div>    
    )
}