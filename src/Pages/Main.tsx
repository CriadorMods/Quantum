import React from "react";

// Components
import Note from "@Components/Note";
import Plans from "@Components/Plans";

const Main: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col gap-10">
            <div className="w-full mt-[3rem] flex justify-center">
                <div className="flex flex-col gap-1 text-center">
                <h1 className="text-[54px] font-bold bg-gradient-to-r from-[#2ec87b] via-[#f25362] via-[#f9858c] via-[#e88d4f] to-[#b883f9] bg-[length:200%] bg-clip-text text-transparent moveGradient">
                    Choose Your Plan
                </h1>
                <span className="text-[#ccc] text-[1.2rem]">
                    Donating will help the server and you will unlock <b>Exclusive Perks!</b>
                </span>
                </div>
            </div>
            <div className="w-full flex justify-center mb-2">
                <Plans/>
            </div>
            <div className="w-full flex justify-center relative bottom-[14px]">
                <Note/>
            </div>
        </div>
    );
};

export default Main;