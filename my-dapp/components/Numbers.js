import Link from "next/link";
import Image from "next/image";
import Up from "../public/up-arrow.svg";
import Down from "../public/down-arrow.svg";

export default function cards() {
    return (
    <>
    <div class="flex justify-evenly px-2 mt-6">
    <div class="w-1/3 px-2">
<div class="p-10 min-h-110 max-w-xl w-500 bg-green-500 rounded-xl text-gray-100 transform duration-500 hover:-translate-y-1 cursor-pointer">
    
    <div class="mt-2">
        <button class="w-full h-16 justify-evenly px-6  bg-red-600 hover:bg-red-300 text-white-800 font-bold p-5 min-h-110 max-w-xl w-1000 rounded inline-flex items-center">
        <div className="flex items-center">
          <Image
            src={Up}
            width={30}
            height={30}
            priority
            alt=""
          />

          <Link href="/">
            <a className="text-lg md:text-xl font-bold ml-3 text-white">
              HI
            </a>
          </Link>
        </div>
        
        </button>
    </div>

    <div class="mt-10">
      <div class="mt-2">
        <button class="w-full h-18 justify-evenly px-6  bg-white text-white-800 font-bold p-5 min-h-110 max-w-xl w-1000 rounded inline-flex items-center">
        <div className="flex items-center">

          <Link href="/">
            <a className="text-lg md:text-xl font-bold ml-3 text-black">
              RESULTS :
            </a>
          </Link>
        </div>
        
        </button>
    </div> 

    <div class="mt-2">
        <button class="w-full h-18 justify-evenly px-6  bg-white text-white-800 font-bold p-5 min-h-110 max-w-xl w-500 rounded inline-flex items-center">
        <div className="flex items-center">
      
          <Link href="/">
            <a className="text-lg md:text-xl font-bold ml-3 text-black">
              Number:
            </a>
          </Link>
        </div>
        
        </button>
    </div> 

    <div class="mt-2">
        <button class="w-full h-18 justify-evenly px-6  bg-white text-white-800 font-bold p-5 min-h-110 max-w-xl w-500 rounded inline-flex items-center">
        <div className="flex items-center">
      
          <Link href="/">
            <a className="text-lg md:text-xl font-bold ml-3 text-black">
              Number:
            </a>
          </Link>
        </div>
        
        </button>
    </div> 
    
    </div>

    
<div class="mt-10">
<button class="w-full h-16 justify-evenly px-6  bg-red-600 hover:bg-red-300 text-white-800 font-bold p-5 min-h-110 max-w-xl w-1000 rounded inline-flex items-center">
        <div className="flex items-center">
          <Image
            src={Down}
            width={30}
            height={30}
            priority
            alt=""
          />

          <Link href="/">
            <a className="text-lg md:text-xl font-bold ml-3 text-white">
              LO
            </a>
          </Link>
        </div>
        
        </button>
</div>
    </div>
    </div>
</div>
        </>
    );
  }
  