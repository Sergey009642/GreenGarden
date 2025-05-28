import Image from "next/image";

function Contact() {
  const images = ["/Fb.png", "/inst.webp", "/watsap.png"];

    return(
<div className="flex justify-center items-center p-[50px]">
    <div className="">
        <div className="w-[350px] h-[400px] bg-[#242123] rounded-2xl">
            <div className="">
                <div className="text-center">
                    <h1 className="text-[40px] text-[#fff]">Contact US</h1>
            </div>
        </div>
<div className="flex justify-center items-center pt-[20px]">
    <div className="flex flex-col">
        {images.map((src, index) => (
            <Image
                key={index}
                src={src}
                width={400}
                height={400}
                alt={`Mini ${index + 1}`}
                className="w-[50px] h-[50px] p-[4px] rounded-[50%]"
            />
        ))}
    </div>
</div>
<div className="pt-[50px] text-center flex flex-col">
     <a href="mailto:GreenGardneHotelDilijan@mail.ru" className="text-[#0454ff] hover:underline text-[20px]">
              GreenGardneHotelDilijan@mail.ru
            </a>
            <a href="tel:093766506" className="hover:underline text-[16px] text-[#fff]">
              093-76-65-06
            </a>
            </div>
        </div>
    </div>
</div>
    )
}
export default Contact