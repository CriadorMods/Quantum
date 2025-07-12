import React from "react";
import { motion } from "framer-motion";

// Assets
import BG from "../assets/Backgrounds/contributorBasicBGv2.jpg"

const Plans: React.FC = () => {

    const plans = [
        {
            name: "Contributor",
            description: [
                "20% Extra XP Boost",
                "1000 V-Bucks",
                "Special Contributor role",
                "Access to private chats and dev testing!"
            ],
            type: "Lifetime",
            price: 9.99,
            discount: 0,
            bpopular: true,
            image: "/assets/Plans/starter.jpg",
            miniImg: "/assets/Plans/starter-mini.jpg",
        },
        {
            name: "Contributor +",
            description: [
                "30% Extra XP Boost",
                "2000 V-Bucks",
                "Special Contributor+ role",
                "Access to private chats and dev testing!"
            ],
            type: "Lifetime",
            price: 14.99,
            discount: 25,
            bpopular: false,
            image: "/assets/Plans/pro.jpg",
            miniImg: "/assets/Plans/pro-mini.jpg",
        },
        {
            name: "Contributor ++",
            description: [
                "40% Extra XP Boost",
                "3000 V-Bucks",
                "Special Contributor++ role",
                "Access to private chats and dev testing!"
            ],
            type: "Lifetime",
            price: 29.99,
            discount: 0,
            bpopular: false,
            image: "/assets/Plans/business.jpg",
            miniImg: "/assets/Plans/business-mini.jpg",
        },
        {
            name: "Contributor Monthly",
            description: [
                "40% Extra XP Boost",
                "1500 V-Bucks",
                "50 Battle Stars Per Month (5 tiers)",
                "Special Contributor Monthly role",
                "Access to private chats and dev testing!"
            ],
            type: "Subscription",
            price: 49.99,
            discount: 0,
            bpopular: false,
            image: "/assets/Plans/enterprise.jpg",
            miniImg: "/assets/Plans/enterprise-mini.jpg",
        },
        {
            name: "Starter Bundle",
            description: [
                "Rougue Agent - Outfit",
                "Catalyst - Backbling",
                "Private Role",
                "600 V-Bucks",
            ],
            type: "Skin Pack",
            price: 3.99,
            discount: 0,
            bpopular: false,
            image: "/assets/Plans/contributor.jpg",
            miniImg: "/assets/Plans/contributor-mini.jpg",
        },
        {
            name: "Donator",
            description: [
                "Rougue Agent - Outfit",
                "Catalyst - Backbling",
                "Private Role",
                "600 V-Bucks",
            ],
            type: "Lifetime",
            price: 99.99,
            discount: 0,
            bpopular: false,
            image: "/assets/Plans/ultimate.jpg",
            miniImg: "/assets/Plans/ultimate-mini.jpg",
        },
    ];

    return (
        <div className="relative flex items-center w-[73.75rem] h-[36.25rem] bg-black/20 rounded-[0.8rem] overflow-hidden">
            <motion.div 
            className="relative ml-4.5 w-[80%] h-[94%] bg-black/20 rounded-[0.7rem] overflow-hidden"
            initial={{ y: -400 }}
            animate={{ y: 0 }}
            exit={{ y: 400 }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 15
            }}
            >
                <img 
                src={BG}
                alt="PlanBG" 
                className="w-full h-full brightness-86 object-cover"
                draggable={false}
                />
                <span className="absolute bottom-0.5 right-2 font-bold text-white/20 text-[9px]">242fe46ccch26</span>
            </motion.div>

            {/* Mini Plans thingy From here */}
            <div className="relative w-[18.5%] h-[93.5%] flex flex-col gap-4 items-center">
                <div className="relative w-[84%] h-[80px] rounded-[8px] bg-white/7 hover:bg-[#75757541] cursor-pointer transition-colors duration-200 ease">

                </div>
            </div>
        </div>
    );
};

export default Plans;