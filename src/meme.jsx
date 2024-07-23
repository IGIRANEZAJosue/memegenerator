import { useState } from "react";
import memesData from "./memesData";

function Meme() {
   const [meme, setMeme] = useState({
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg",
   });

   const [allMemeImages, setAllMemeImages] = useState(memesData);

   function getMemeImage() {
      const memesArray = allMemeImages.data.memes;
      const random = Math.floor(Math.random() * memesArray.length);
      const url = memesArray[random].url;
      setMeme((prevMeme) => ({
         ...prevMeme,
         randomImage: url,
      }));
   }

   const handleChange = (event) => {
      const { name, value } = event.target;
      setMeme((prevMeme) => ({
         ...prevMeme,
         [name]: value,
      }));
   };

   return (
      <div className="w-full">
         <div className="flex gap-5 mt-10">
            <label className="flex flex-col my-6">
               Top Text
               <input
                  type="text"
                  placeholder="Top text "
                  className="border-[#D1D5DB] border-2 p-2 w-[300px]"
                  name="topText"
                  value={meme.topText}
                  onChange={handleChange}
               />
            </label>
            <label className="flex flex-col my-6">
               Bottom Text
               <input
                  type="text"
                  placeholder="Bottom text "
                  className="border-[#D1D5DB] border-2 p-2 w-[300px]"
                  name="bottomText"
                  value={meme.bottomText}
                  onChange={handleChange}
               />
            </label>
         </div>
         <button
            onClick={getMemeImage}
            className="bg-[#A818DA] p-4 rounded-lg w-full text-white"
         >
            Get new meme image
         </button>

         <div className="relative w-full h-full">
            <img
               className="my-6 rounded-lg w-full h-full"
               src={meme.randomImage}
               alt="memeImage"
            />
            <h2 className="top-6 absolute w-full font-extraboldS text-5xl text-center text-white uppercase">
               {meme.topText}
            </h2>
            <h2 className="bottom-6 absolute w-full font-extraboldS text-5xl text-center text-white uppercase">
               {meme.bottomText}
            </h2>
         </div>
      </div>
   );
}

export default Meme;
