import SwiperGallery from "../Componet/SwiperImges";
import SwiperRoom from "../Componet/SwiperRoom";

const dataCards = [
  [
    "Օրավարձով է տրվում",
    "🏡սեփական տուն Դպրաբակ համայնքում։",
    "Դիլիջանից 20 կմ հեռավորության վրա։",
    "Մոտ է 👉 Գոշավանքին և Աղավնավանքին։",
    "Ունի բոլոր հարմարությունները Ձեր 👩‍❤️‍👨ընտանեկան,",
    "👭👬ընկերական հավաքույթները,",
    "🥳🎊🎉ծննդյան տարեդարձները և",
    "լիարժեք հանգիստը անցկացնելու համար։",
  ],
  [
    "Ունի՝",
    "✅ 1 ընդարձակ հյուրասենյակ 🛋️",
    "✅ 5 հարմարավետ ննջասենյակ 🛏️",
    "✅ 3 սանհանգույց🛁",
    "✅ Մեծ բաց պատշգամբ",
    "✅ Մեծ բաց պատշգամբ՝ հիասքանչ տեսարանով",
    "✅ Սառնարան, անհրաժեշտ սպասք 🍽️",
  ],
  [
    "✅ Մեծ և փոքր տաղավարներ՝ բացօթյա ժամանցի համար",
    "✅ Մանղալ, խորովածի շշեր",
    "✅ Լայն բակ, ճոճանակներ",
    "✅ Խարույկի անկյուն🔥",
    "✅ Լողավազան՝ հանգստի համար 🏊",
    "Ամրագրելու կամ հարցերի համար զանգահարեք՝ ",
    <a
      href="tel:093766506"
      className="hover:underline text-[24px] text-[#fff]"
      key="phone"
    >
      ☎️ 093766506
    </a>,
  ],
];

export default function Home() {
  return (
    <div className="">
      {/* Հիմնական Բաններ */}
      <div className="w-[100%] h-[120vh] bg-[url('/Home7.jpg')] bg-cover bg-center max-md:h-[90vh] max-sm:h-[80vh]">
      <div className="bg-[#1a1a1a4b] w-full h-[120vh]">
        <div className="flex items-center justify-center pt-[25%] max-sm:pt-[55%]">
          <h1 className="text-[50px] text-center text-white font-[cursive] font-normal max-sm:text-[26px]">
            Ձեր Հանգիստ անցկացրեք
            <br />
            մեզ մոտ
          </h1>
        </div>
        </div>
      </div>

      {/* Նկարագրություն */}
      <div className="flex justify-center items-center p-[50px]">
        <div className="text-center">
          <p className="text-[28px] text-center font-[cursive] font-normal bg-gradient-to-r from-[#0e773a] via-[#15523b] to-[#42773d] bg-clip-text text-transparent max-xl:text-[20px]  max-lg:text-[16px] max-md:text-[12px] max-sm:text-[10px]">
            Դիլիջանից 20 կմ հեռավորության վրա, մոտ Գոշավանքին և Աղավնավանքին:
            <br />
            <br />
            Տունը ամբողջությամբ հարմարեցված է՝
            <br />
            ընտանեկան, ընկերական հավաքույթների, ծննդյան և այլ տոնակատարությունների համար:
          </p>
        </div>
      </div>

      {/* 3 Տեղեկատվական Բլոկներ */}
      <div className="flex flex-wrap justify-center items-center w-full min-h-[100vh] bg-[url('/Images.jpg')] bg-center bg-cover py-[50px] gap-[15px]">
        {dataCards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col bg-[#0f0f0fa8] p-[20px] w-full max-w-[400px] h-auto rounded-2xl text-[#fff] text-[18px]"
          >
            {card.map((item, i) =>
              typeof item === "string" ? (
                <p key={i} className="p-[4px] leading-[1.5] max-sm:taxt-[12px]">
                  {item}
                </p>
              ) : (
                item // already a JSX element like the <a> tag
              )
            )}
          </div>
        ))}
      </div>

      {/* Swiper Gallery */}
      <div className="flex justify-center items-center pt-[50px] pb-[50px] gap-[50px] flex-col lg:flex-row">
        <SwiperGallery />
        <SwiperRoom />
      </div>
    </div>
  );
}
