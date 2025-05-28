import Nav from "./nav";
import Logo from "./logo";

export default function Header (){
    return (
        <header className="w-full bg-[#1d1d1dad] absolute max-sm:h-[160px]">
          <div className="flex justify-around items-center p-[10px]">
          <Logo/>
          <Nav/>
          </div>
        </header>
    )
}