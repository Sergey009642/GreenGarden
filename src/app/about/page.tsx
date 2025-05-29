import SwiperGallery from "../Componet/SwiperImges";
import SwiperRoom from "../Componet/SwiperRoom";

export default function Home() {
    return (
        <div className="">
        <div className="w-full h-[120vh] bg-[url('/Home7.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-font">
            Ձեր Հանգիստ անցկացրեք
            <br />
            մեզ մոտ
        </h1>
        </div>
        <div className="bg-[#00000075] w-full h-full"></div>
    </div>
    <div className="flex justify-center items-center p-[50px]">
    <div className="text-center">
        <p className="texts-fns">
            Դիլիջանից 20 կմ հեռավորության վրա, մոտ Գոշավանքին և Աղավնավանքին:
            <br />
            Տունը ամբողջությամբ հարմարեցված է՝
            <br />
            ընտանեկան, ընկերական հավաքույթների, ծննդյան և այլ տոնակատարությունների համար:
        </p>
    </div>
    </div>
     <div className="flex justify-center items-center w-full h-[100vh] bg-[url('/Images.jpg')] bg-center bg-cover ">
            <div className="flex justify-center gap-[150px] p-[50px]">
              <div className="flex flex-col bg-[#0f0f0fa8] p-[20px] w-[600px] h-[730px] rounded-2xl">
<p className="p-[4px] text-[#fff] text-[28px]">Օրավարձով է տրվում</p>
<p className="p-[4px] text-[#fff] text-[28px]">🏡սեփական տուն Դպրաբակ համայնքում։</p>
<p className="p-[4px] text-[#fff] text-[28px]">Դիլիջանից 20 կմ հեռավորության վրա։</p>
<p className="p-[4px] text-[#fff] text-[28px]">Մոտ է 👉 Գոշավանքին և Աղավնավանքին։</p>
<p className="p-[4px] text-[#fff] text-[28px]">Ունի բոլոր հարմարությունները Ձեր <br />👩‍❤️‍👨ընտանեկան,</p>
<p className="p-[4px] text-[#fff] text-[28px]">👭👬ընկերական հավաքույթները,</p>
<p className="p-[4px] text-[#fff] text-[28px]">🥳🎊🎉ծննդյան տարեդարձները և</p>
<p className="p-[4px] text-[#fff] text-[28px]">լիարժեք հանգիստը անցկացնելու համար։</p>

</div>
<div className="flex flex-col bg-[#0f0f0fa8] p-[20px] w-[600px] h-[730px] rounded-2xl">
<p className="p-[4px] text-[#fff] text-[28px]">Ունի՝</p> 
<p className="p-[4px] text-[#fff] text-[28px]">✅  1 ընդարձակ հյուրասենյակ 🛋️</p>
<p className="p-[4px] text-[#fff] text-[28px]">✅ 5 հարմարավետ ննջասենյակ 🛏️</p>
<p className="p-[4px] text-[#fff] text-[28px]">✅ 3 սանհանգույց🛁</p>
<p className="p-[4px] text-[#fff] text-[28px]">✅ Մեծ բաց պատշգամբ</p>
<p className="p-[4px] text-[#fff] text-[28px]">✅ Մեծ բաց պատշգամբ՝ հիասքանչ տեսարանով</p>
<p className="p-[4px] text-[#fff] text-[28px]">✅ Սառնարան, անհրաժեշտ սպասք 🍽️</p>
<p className="p-[4px] text-[#fff] text-[28px]">✅ Մեծ և փոքր տաղավարներ՝ բացօթյա ժամանցի համար</p>
<p className="p-[4px] text-[#fff] text-[28px]">✅ Մանղալ, խորովածի շշեր</p>
<p className="p-[4px] text-[#fff] text-[28px]">✅ Լայն բակ, ճոճանակներ</p>
<p className="p-[4px] text-[#fff] text-[28px]">✅ Խարույկի անկյուն🔥</p>
<p className="p-[4px] text-[#fff] text-[28px]">✅  Լողավազան՝ հանգստի համար  🏊</p>
<p className="p-[4px] text-[#fff] text-[28px]">Ամրագրելու կամ հարցերի համար զանգահարեք՝ </p>
<a href="tel:093766506" className="hover:underline text-[28px] text-[#fff]">
             ☎️ 093766506
            </a>
                </div>  
            </div>
        </div>
    <div className="flex justify-center items-center p-[100px] max-sm:flex-col gap-[50px]">
            <SwiperGallery/>
            <SwiperRoom/>
        </div>    
</div>
    )
}