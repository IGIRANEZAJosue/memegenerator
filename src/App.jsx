import "./App.css";
import Meme from "./meme";
function App() {
   return (
      <div className="flex justify-center py-32 w-full container">
         <section className="flex flex-col items-center px-36 w-full">
            <nav className="flex items-center gap-4 bg-[#A626D3] p-5 w-full">
               <img src="/Troll Face.svg" alt="" className="size-9" />
               <h1 className="font-semibold text-white text-xl">
                  Meme Generator
               </h1>
               <h3 className="ml-auto font-semibold text-white">
                  React Course - Project 3
               </h3>
            </nav>
            <div>
               <Meme />
            </div>
         </section>
      </div>
   );
}

export default App;
