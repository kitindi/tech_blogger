import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Post = () => {
  return (
    <div className="w-full px-4 md:px-0">
      <div className="w-full grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 relative">
          <Image src={assets[0].headerImage} alt="Blog Post" />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#f2f8ff] opacity-10"></div>
        </div>
        <div className="col-span-12 md:col-span-6 bg-[#0f4189] flex justify-center items-center p-8 md:px-16 md:py-0">
          <div>
            <h3 className="text-4xl md:text-5xl text-white pb-2">Elon Musk’s xAI releases its latest flagship model, Grok 3</h3>
            <p className="text-xs text-slate-300 font-medium my-3">Author: Abdulaziz Sadi</p>
            <p className="text-xs text-slate-300 font-medium">9:00 AM PST · February 18, 2025</p>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 relative">
          <p className="text-xs md:text-sm text-slate-500 py-2 px-8 md:px-0 md:text-center font-medium">IMAGE CREDITS : SEAN JOAN / Unsplash</p>
        </div>
        <div className="col-span-12 md:col-span-6 bg-[#cde2ff]"></div>
      </div>
      <div className="w-full  max-w-5xl mx-auto p-10 ">
        <div className="w-full py-10 md:py-20">
          <p className="text-[16px] md:text-lg text-slate-600 pt-2 pb-3">
            Elon Musk’s xAI has released its latest flagship model, Grok 3. The new model is said to be the most advanced AI model in the world, with
            capabilities that are far beyond what any other AI model can achieve. The model is expected to revolutionize the field of artificial intelligence
            and bring about a new era of innovation and progress.
          </p>
          <p className="text-[17px] md:text-[18px] text-slate-600 pt-2 pb-3">
            In a move that has sent ripples through the tech world, Elon Musk’s artificial intelligence venture, xAI, has unveiled its latest flagship model,
            Grok 3. This cutting-edge AI system promises to redefine the boundaries of machine learning, natural language processing, and problem-solving
            capabilities. As the third iteration in the Grok series, this release marks a significant leap forward in AI technology, solidifying xAI’s position
            as a major player in the competitive AI landscape.
          </p>
          <p className="text-[17px] md:text-[18px] text-slate-600 pt-2 pb-3">
            The release of Grok 3 opens up a world of possibilities across various sectors: Healthcare: Grok 3 could revolutionize medical diagnostics by
            analyzing patient data, identifying patterns, and assisting doctors in making informed decisions. Finance: The model’s ability to process vast
            amounts of financial data in real-time could enhance risk assessment, fraud detection, and investment strategies. Autonomous Systems: Grok 3’s
            advanced reasoning capabilities could accelerate the development of self-driving cars, drones, and robotics. Creative Industries: From generating
            music and art to assisting in scriptwriting, Grok 3’s creative potential is limitless.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
