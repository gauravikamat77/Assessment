import React from "react";
import {useEffect,useState} from "react";
import bg from "./bg.jpg";
import bg2 from "./bg2.jpg";
import bg3 from "./bg3.jpg";

function App() {
const images = [
    {i:bg,title: "Client 1",info:"Dubai, United Arab Emirates"},
    {i:bg2,title: "Client 2",info:"Dubai, United Arab Emirates"},
    {i:bg3,title: "Client 3",info:"Dubai, United Arab Emirates"},
]

const [image,setImage] = useState(0);
const [current,setCurrent] = useState(1);

useEffect(()=>{
const timer = setInterval(() => {
   setImage((prev)=>(prev+1)%images.length) 
}, 5000);
return () => clearInterval(timer);
},[image])

const stateChange = () =>{
    setImage((prev)=>(prev+1)%images.length);
}

const Next = () => {
    setCurrent((prev)=>(prev+1)%images.length);
}

const Previous = () => {
    setCurrent((prev)=> prev === 0 ? images.length-1 : prev-1);
}

return(
    <div>
     <nav className="fixed top-6 left-4 h-[60px] z-50 right-4 bg-white" >
        <ul className=" hidden md:flex items-center gap-5 mt-2 ml-4 font-sans">
            <li>About</li>
            <li>News</li>
            <li>Services</li>
            <li>Our Team</li>
            <li>Make Enquiry</li>
            <button className="ml-auto border border-black px-6 py-2 mr-3 text-center"> Contact us →</button>
        </ul>
        <div className="md:hidden flex justify-end mr-6 mt-2">
            <button className="mr-auto ml-3 border border-black px-6 py-2 text-center"> Contact us →</button>
            <button className="text-2xl">☰</button>
        </div>
     </nav>
     <img className="w-full h-[690px]" src={images[image].i}></img>
     <span className="absolute top-[200px] left-[20px] text-white font-extralight">Welcome To TenTwenty Farms</span>
     <span className="absolute text-7xl top-[230px] left-[20px] text-white font-normal font-sans">From Our Farms <br/> To Your Hands</span>
     <button className="absolute border border-black p-3 bottom-[50px] left-[35px] md:left-[60px] md:p-5" onClick={stateChange}>
        <img className="h-[90px] w-[90px] md:h-[130px] md:w-[130px]" src={images[(image+1)%images.length].i}></img>
        <span className="absolute bottom-[45px] left-[40px] md:bottom-[50px] md:left-[50px] md:p-5 text-white font-normal font-sans">Next</span>
     </button>
     <span className="flex justify-center text-5xl mt-[90px]">Quality Products</span>
     <p className="text-center text-sm mt-10 font-light text-gray-500 max-w-md mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
     <div className="relative w-full overflow-hidden h-[700px] top-10">
    <div className="flex justify-center items-center h-[500px] ">
        {images.map((img,index)=>{
            const offset = index - current;
            return(
                <div className="absolute transition-all duration-500 ease-in-out" key={index} 
                style={{transform: `translateX(${offset*320}px)
                                    scale(${offset === 0 ? 1.1 : 0.9})
                                    rotate(${offset === 0 ? 0 : offset < 0 ? -12 : 12}deg)`, zIndex: offset === 0 ? 10: 5,}}>
                    <img className="w-[250px] h-[360px] object-cover" src={img.i}></img>
                    <span className="flex justify-center text-xl font-normal">{img.title}</span>
                    <span className="flex justify-center text-sm font-light">{img.info}</span>
                </div>    
            )
        })}
        </div>
            
        <div className="flex justify-center gap-6 mt-12">
            <button className="border border-black px-7" onClick={Next}>Next</button>
            <button className="border border-black px-4" onClick={Previous}>Previous</button>
        </div>
    </div>
    </div>
)
}

export default App;