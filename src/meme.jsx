import { useState } from "react";
import memesData from "./memesData";

function Meme() {
   const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg");

   function getMemeImage() {
      const memesArray = memesData.data.memes;
      const random = Math.floor(Math.random() * memesArray.length);
      setMemeImage(memesArray[random].url);
   }

   return (
      <div className="w-full">
         <div className="flex gap-5 mt-10">
            <label className="flex flex-col my-6">
               Top Text
               <input
                  type="text"
                  placeholder="Top text "
                  className="border-[#D1D5DB] border-2 p-2 w-[300px]"
               />
            </label>
            <label className="flex flex-col my-6">
               Bottom Text
               <input
                  type="text"
                  placeholder="Bottom text "
                  className="border-[#D1D5DB] border-2 p-2 w-[300px]"
               />
            </label>
         </div>
         <button
            onClick={getMemeImage}
            className="bg-[#A818DA] p-4 rounded-lg w-full text-white"
         >
            Get new meme image
         </button>

         <img
            className="my-6 rounded-lg w-full h-full"
            src={memeImage}
            alt="memeImage"
         />
      </div>
   );
}

export default Meme;
