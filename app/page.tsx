"use client"
import { useEffect, useState } from "react";
import texts from "../json/text.json";

const HomeView = () => {
  const [index, setIndex] = useState<number>(0)
  const [progress, setProgress] = useState<number>(0);

  useEffect(()=> {
    const interval = setInterval(()=> {
      setProgress((prevProgress)=> (prevProgress < 100 ? prevProgress + 1 :100))
    }, 10000);
    const quoteIndexInterval = setInterval(()=> {
      setIndex((prevIndex)=> (prevIndex + 1) % texts.length)
    }, 8000);

    return ()=> {
      clearInterval(quoteIndexInterval);
      clearInterval(interval);
    }
  },[])
  return ( 

    <>
    <main className="h-screen w-screen bg-[#0076E0] px-[10%] py-[5vh]">
      <div className="w-full"><p className="lg:text-[120px]">&#58;&#40;</p></div>
      <div className="text-white"><p className="lg:text-[60px] leading-tight">{texts[index].quote}</p></div>
      <div className="text-white"><p className="lg:text-[40px] leading-tight">{progress}% complete</p></div>
    </main>
    </>
   );
}
 
export default HomeView;