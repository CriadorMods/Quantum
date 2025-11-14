import React, { useState } from "react";
import { motion } from "framer-motion";

// Components
import Plans from "@/Components/Plans";

const Main: React.FC = () => {
    const [blurHex, setblurHex] = useState("");

    const sendHex = (hex: string) => {
        setblurHex(hex);
    };

    return (
        <div className="relative w-screen h-screen flex flex-col gap-8 justify-center items-center">

            {
                <>
                    <motion.div 
                    initial={{ backgroundColor: blurHex, filter: "blur(85px)", scale: 0.7, opacity: 0 }}
                    animate={{ backgroundColor: blurHex, filter: "blur(85px)", scale: 1, opacity: 1 }}
                    transition={{
                        type: "tween",
                        duration: 0.5,
                    }}
                    className="absolute -left-4 -top-4 blur-3xl rounded-full w-18 md:w-28 h-18 md:h-26" />

                    <motion.div
                    initial={{ backgroundColor: blurHex, filter: "blur(85px)", scale: 0.7, opacity: 0 }}
                    animate={{ backgroundColor: blurHex, filter: "blur(85px)", scale: 1, opacity: 1 }}
                    transition={{
                        type: "tween",
                        duration: 0.5,
                    }}
                    className="absolute -right-4 top-0 lg:-right-4 lg:bottom-0 blur-3xl rounded-full w-18 md:w-28 h-18 md:h-26" />
                </>
            }

            <div className="flex flex-col text-center">
                <h1 className="text-[2.75rem] md:text-[3.375rem] font-bold bg-linear-to-r from-[#2ec87b] via-[#f25362] via-[#f9858c] via-[#e88d4f] to-[#b883f9] bg-clip-text text-transparent moveGradient">
                    Choose Your Plan
                </h1>
                <span className="text-[#ccc] text-md md:text-lg">
                    Donating will help the server and you will unlock <b>Exclusive Perks!</b>
                </span>
            </div>
            <Plans sendHex={sendHex}/>
        </div>
    );
};

export default Main;
