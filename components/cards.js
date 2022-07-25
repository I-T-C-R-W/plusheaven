import Link from "next/link";
import Image from "next/image";
import Up from "../public/up-arrow.svg";
import Down from "../public/down-arrow.svg";

export default function cards() {
    return (
    <>
    <div class="px-2 mt-6">
  <div class="flex -mx-2">
    <div class="w-1/3 px-2">
<div class="p-10 min-h-110 max-w-xl w-500 bg-green-500 rounded-xl text-gray-100 transform duration-500 hover:-translate-y-1 cursor-pointer">
    
    <div class="mt-2">
        <button class="w-full h-12 justify-evenly px-6  bg-red-600 hover:bg-red-300 text-white-800 font-bold p-5 min-h-110 max-w-xl w-1000 rounded inline-flex items-center">
        <div class="flex items-center">
          <Image
            src={Up}
            width={30}
            height={30}
            priority
            alt=""
          />

          <Link href="/">
            <a class="text-lg md:text-xl font-bold ml-3 text-white">
              HI
            </a>
          </Link>
        </div>
        
        </button>
    </div>

    <div class="mt-10">
        <form class="w-full max-w-sm">
        <div class ="flex justify-evenly">
  <div class="flex  justify-center items-center border-b border-teal-500 py-2">
    <input class="appearance-none bg-transparent border-none w-full text-white mr-3 py-4 px-1 leading-tight focus:outline-none" type="number" placeholder="Enter Amount" aria-label="Full name"></input>
    <button class="bg-green-800 hover:bg-green-300 text-white font-bold py-2 px-4 rounded-full">
  Bet
</button>
    <button class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
      Clear
    </button>
  </div>
  </div>
 
  <div class="flex justify-evenly -mx-2 mt-5">
    <div class="w-1/3 px-2">
    <div class="mt-2">
        <button class="w-full h-12 justify-evenly bg-gray-600 hover:bg-gray-400 text-white-800 font-bold p-5 min-h-110 max-w-xl w-1000 rounded inline-flex items-center">
         <span>+25$</span>
        </button>
    </div>
    </div>
    <div class="w-1/3 px-2">
    <div class="mt-2">
        <button class="w-full h-12 justify-evenly bg-gray-600 hover:bg-gray-400 text-white-800 font-bold p-5 min-h-110 max-w-xl w-1000 rounded inline-flex items-center">
         <span>+100$</span>
        </button>
    </div>
    </div>
    </div>

    <div class="flex justify-evenly -mx-2">
    <div class="w-1/3 px-2">
    <div class="mt-6">
        <button class="w-full h-12 justify-evenly bg-gray-600 hover:bg-gray-400 text-white-800 font-bold p-5 min-h-110 max-w-xl w-1000 rounded inline-flex items-center">
         <span>1/2</span>
        </button>
    </div>
    </div>
    <div class="w-1/3 px-2">
    <div class="mt-6">
        <button class="w-full h-12 justify-evenly bg-gray-600 hover:bg-gray-400 text-white-800 font-bold p-5 min-h-110 max-w-xl w-1000 rounded inline-flex items-center">
         <span>X2</span>
        </button>
    </div>
    </div>
    </div>
</form>
    
</div>
<div class="mt-10">
<button class="w-full h-12 justify-evenly px-6  bg-red-600 hover:bg-red-300 text-white-800 font-bold p-5 min-h-110 max-w-xl w-1000 rounded inline-flex items-center">
        <div class="flex items-center">
          <Image
            src={Down}
            width={30}
            height={30}
            priority
            alt=""
          />

          <Link href="/">
            <a class="text-lg md:text-xl font-bold ml-3 text-white">
              LO
            </a>
          </Link>
        </div>
        
        </button>
</div>
    </div>
    </div>
    <div class="w-1/3 px-2">
    <div class="mt-5 flex flex-col gap-y-5">
    
    <div class="shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer">
    <div class="max-h-100 flex overflow-hidden">
            <Image class="w-3/3 h-3/3"
             src="https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/diamonds_10.svg"
            alt=""
            wlayout="fill"
            objectFit="cover"
             />
            </div>
        </div>
        <div class="shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer">
            <div class="max-h-100 flex overflow-hidden">
            <Image class="w-3/3 h-3/3"
             src="https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/diamonds_10.svg"
            alt=""
            wlayout="fill"
            objectFit="cover"
             />
            </div>
        </div>
        </div>
    </div>
    <div class="w-1/3 px-2">
    <div class="p-10 min-h-110 max-w-xl w-500 bg-green-500 rounded-xl text-gray-100 transform duration-500 hover:-translate-y-1 cursor-pointer ">
    <div class="mt-1">
        <button class="w-full h-12 justify-evenly px-6 bg-red-600 hover:bg-red-300 text-white-800 font-bold p-5 min-h-110 max-w-xl w-1000 rounded inline-flex items-center">
         <span>RED</span>
        </button>
    </div>
    <div class="mt-6">
        <button class="w-full h-12 justify-evenly px-6 bg-black hover:bg-gray-700 text-white-800 font-bold p-5 min-h-110 max-w-xl w-1000 rounded inline-flex items-center">
         <span>BLACK</span>
        </button>
        <div class="mt-7">
        <button class="w-full h-12 justify-evenly px-6 bg-gray-600 hover:bg-gray-500 text-white-800 font-bold p-5 min-h-110 max-w-xl w-1000 rounded inline-flex items-center">
         <span>J,Q,K,A </span>
        </button>
    </div>
    <div class="mt-6">
        <button class="w-full h-12 justify-evenly px-6 bg-gray-600 hover:bg-gray-500 text-white-800 font-bold p-5 min-h-110 max-w-xl w-1000 rounded inline-flex items-center">
         <span>2 - 9 </span>
        </button>
    </div>
    <div class="px-2">
  <div class="flex justify-evenly -mx-2 ">
    <div class="w-1/3 px-2">
    <div class="mt-6">
        <button class="w-full h-12 justify-evenly bg-gray-600 hover:bg-gray-400 text-white-800 font-bold p-5 min-h-110 max-w-xl w-1000 rounded inline-flex items-center">
         <span>K , A </span>
        </button>
    </div>
    </div>
    <div class="w-1/3 px-2">
    <div class="mt-6">
        <button class="w-full h-12 justify-evenly px-6 bg-gray-600 hover:bg-gray-400 text-white-800 font-bold p-5 min-h-110 max-w-xl w-1000 rounded inline-flex items-center">
         <span>A</span>
        </button>
    </div>
    
    </div>
    </div>

    <div class="mt-6">
        <button class="w-full h-12 justify-evenly px-6 bg-gray-600 hover:bg-gray-400 text-white-800 font-bold p-5 min-h-110 max-w-xl w-1000 rounded inline-flex items-center">
         <span>Joker</span>
        </button>
    </div>

    </div>
    </div>
    </div>
    </div>
  </div>
</div>
        </>
    );
  }
  