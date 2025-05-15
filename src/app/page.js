import Image from "next/image"
import heroImage from "../../public/heroImage.webp"
import { Caveat_Brush } from 'next/font/google'
import { Roboto } from 'next/font/google'
import { GithubIcon, FBIcon, XIcon } from './components/icons/icons.js';
import Buttons  from "./components/Buttons";


const caveat_brush = Caveat_Brush({
  subsets: ['latin'], // Correct subset for most languages
  weight: ['400'], // 'Caveat Brush' only supports 400 weight
})

const roboto = Roboto({
  subsets: ['latin'], // Correct subset for most languages
  weight: ['400'] // Define only the weight supported by 'Roboto'
});




export default function Home() {
  const heroContent = "relative flex gap-40 items-center justify-center mt-50"; 

  return (
    <div className={heroContent}>
      <div className="mr-10"> {/* Apply margin to control spacing between the first and second div */}
        <h1 className={`${caveat_brush.className} text-[clamp(40px,8vw,80px)] leading-[0.9] md:leading-[1] text-white mb-0`}> {/* Responsive font size & tighter line height */}
           I&apos;m<br />
          <span className="text-purple-700 text-[clamp(60px,12vw,120px)]">Kavindu Shehan,</span> {/* Responsive font size */}
        </h1>
        <h2 className={`${caveat_brush.className} text-[clamp(60px,12vw,120px)] leading-[0.9] md:leading-[1] text-white -mt-2 md:-mt-4 mb-2`}> {/* Adjusted margin and line height */}
          a Web Developer
        </h2>
        <p className={`${roboto.className} max-w-xl text-white/90 mt-4 text-base md:text-lg`}> {/* Slightly less prominent text, adjusted max-width and margin */}
          Driven by curiosity and a love for building things that work beautifully, I turn ideas into functional, engaging digital experiences. Always evolving, always exploring what’s next on the web.
        </p>
        <div className="mt-7" >
          <Buttons />
        </div>
      </div>
      <div className=""> {/* Apply a small margin to control gap */}
        <Image src={heroImage} alt="Hero Image" className="w-110 h-auto ml-0" />
      </div>
      <div className="pt-5  text-white absolute flex gap-3 rotate-90 right-[120px] bottom-30"> {/* Adjust gap between third div */}
        <p className="pt-1">Follow me on ----- </p>
        <GithubIcon /> <FBIcon /> <XIcon />
        
      </div>

<div className="w-[30rem] h-[20rem] bg-[#9810FA] absolute -z-5 blur-[300px] animate-spin"></div>
    </div>
  );
}

