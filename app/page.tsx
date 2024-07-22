"use client"
import { useEffect, useState } from "react";
import texts from "../json/text.json";

const HomeView = () => {
  const [index, setIndex] = useState<number>(0)
  const [progress, setProgress] = useState<number>(0);
  const [showDarkScreen, setShowDarkScreen] = useState<boolean>(false);

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
  },[]);

  useEffect(() => {
    if (progress ===100) {
      setShowDarkScreen(true);
      setTimeout(() => {
        // Reload the page after 3 seconds
        window.location.reload();
      }, 3000);
    }
  }, [progress]);

  return ( 

    <>
    {showDarkScreen && <>
    <div className="h-screen w-screen text-white bg-black flex items-center justify-center overflow-hidden fixed z-10 lg:text-[40px] bt-text">
      booting...
    </div>
    </>}
    <main className="h-screen w-screen bg-[#0076E0] px-[10%] py-[5vh]">
      <div className="w-full"><p className="text-[100px] lg:text-[120px]">&#58;&#40;</p></div>
      <div className="text-white"><p className="text-[32px] lg:text-[60px] leading-tight">{texts[index].quote}</p></div>
      <div className="text-white"><p className="lg:text-[40px] leading-tight">{progress}% complete</p></div>
    </main>

    {/* <a href="https://www.producthunt.com/posts/bsod-blue-screen-of-death-screensaver?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-bsod&#0045;blue&#0045;screen&#0045;of&#0045;death&#0045;screensaver" target="_blank" className="fixed bottom-2 right-2"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=472934&theme=light" alt="BSOD&#0032;&#0045;&#0032;Blue&#0032;Screen&#0032;of&#0032;Death&#0032;Screensaver - One&#0032;software&#0032;malfunction&#0032;can&#0032;bring&#0032;down&#0032;critical&#0032;systems | Product Hunt" className="w-[250px] h-[54px]" width="250" height="54" /></a> */}
    </>
   );
}
 
export default HomeView;