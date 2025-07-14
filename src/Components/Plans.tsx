import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// Assets - Backgrounds
import ContributorBG from "../assets/Backgrounds/contributorBasicBGv2.jpg";
import ContributorplusBG from "../assets/Backgrounds/contributorPlusBGv2.jpg";
import ContributorplusplusBG from "../assets/Backgrounds/ContributorPlusPlusBGv2.jpg";
import ContributorMonthlyBG from "../assets/Backgrounds/contributorM.png";
import DonatorBG from "../assets/Backgrounds/donatornew.jpg";
import StarterPackBG from "../assets/Backgrounds/starterpack.jpg"

// Assets - Mini Icons
import ContributorMini from "../assets/Mini-Icons/contributorminiv2.png";
import ContributorPMini from "../assets/Mini-Icons/contributorPminiv2.jpg";
import ContributorPPMini from "../assets/Mini-Icons/contributorPPmini.jpg";
import ContributorMMini from "../assets/Mini-Icons/ContributorMMini.jpg";
import DonatorMini from "../assets/Mini-Icons/donatormini.jpg";
import StarterPackMini from "../assets/Mini-Icons/starterpackmini.jpg";

// Zustand
import { useOffersStore } from "@Zustand/OffersStore";

const Plans: React.FC = () => {
const { OfferIndex, setOfferIndex, incrementOfferIndex } = useOffersStore();

    const plans = [
        {
            offerId: "66ccc698dbdf4",
            name: "Contributor",
            perks: [
                "20% Extra XP Boost",
                "1000 V-Bucks",
                "Special Contributor role",
                "Access to private chats and dev testing!"
            ],
            type: "Lifetime",
            price: 9.99,
            discount: 0,
            bpopular: true,
            image: ContributorBG,
            miniImg: ContributorMini,
            redirect: "https://youtu.be/E4WlUXrJgy4?si=RsDFnfJ2p5U6Jweh",
        },
        {
            offerId: "66ccca5d706dc",
            name: "Contributor +",
            perks: [
                "30% Extra XP Boost",
                "2000 V-Bucks",
                "Special Contributor+ role",
                "Access to private chats and dev testing!"
            ],
            type: "Lifetime",
            price: 14.99,
            discount: 25,
            bpopular: false,
            image: ContributorplusBG,
            miniImg: ContributorPMini,
            redirect: "https://youtu.be/E4WlUXrJgy4?si=RsDFnfJ2p5U6Jweh",
        },
        {
            offerId: "66cccbf0e2ea8",
            name: "Contributor ++",
            perks: [
                "40% Extra XP Boost",
                "3000 V-Bucks",
                "Special Contributor++ role",
                "Access to private chats and dev testing!"
            ],
            type: "Lifetime",
            price: 19.99,
            discount: 0,
            bpopular: false,
            image: ContributorplusplusBG,
            miniImg: ContributorPPMini,
            redirect: "https://youtu.be/E4WlUXrJgy4?si=RsDFnfJ2p5U6Jweh",
        },
        {
            offerId: "66ccc429a130",
            name: "Contributor Monthly",
            perks: [
                "40% Extra XP Boost",
                "1500 V-Bucks",
                "50 Battle Stars Per Month (5 tiers)",
                "Special Contributor Monthly role",
                "Access to private chats and dev testing!"
            ],
            type: "Subscription",
            price: 7.99,
            discount: 0,
            bpopular: false,
            image: ContributorMonthlyBG,
            miniImg: ContributorMMini,
            redirect: "https://youtu.be/E4WlUXrJgy4?si=RsDFnfJ2p5U6Jweh",
        },
        {
            offerId: "66cccd642h52",
            name: "Starter Bundle",
            perks: [
                "Rougue Agent - Outfit",
                "Catalyst - Backbling",
                "Private Role",
                "600 V-Bucks",
            ],
            type: "Skin Bundle",
            price: 3.99,
            discount: 0,
            bpopular: false,
            image: StarterPackBG,
            miniImg: StarterPackMini,
            redirect: "https://youtu.be/E4WlUXrJgy4?si=RsDFnfJ2p5U6Jweh",
        },
        {
            offerId: "66cccc426f300",
            name: "Donator",
            perks: [
                "Private role with private chat access"
            ],
            type: "Lifetime",
            price: 2.99,
            discount: 0,
            bpopular: false,
            image: DonatorBG,
            miniImg: DonatorMini,
            redirect: "https://youtu.be/E4WlUXrJgy4?si=RsDFnfJ2p5U6Jweh",
        },
    ];

    const DiscountedPrice = plans[OfferIndex].discount > 0 ? Number(plans[OfferIndex].price - plans[OfferIndex].price * (plans[OfferIndex].discount / 100)).toFixed(2) : null;

    return (
        <div className="relative flex items-center w-[73.75rem] h-[36.25rem] bg-black/20 rounded-[0.8rem] overflow-hidden">
        <AnimatePresence mode="wait">
            <motion.div 
            className="relative ml-4.5 flex flex-col justify-start items-start w-[80%] h-[94%] bg-black/20 rounded-[0.7rem] overflow-hidden"
            key={OfferIndex}
            initial={{ y: -600 }}
            animate={{ y: 0 }}
            exit={{ y: 600 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 16
            }}
            >
                <div className="z-10 mt-20 ml-8 relative text-white">
                <span className="text-white/60 font-bold text-[1.15rem] md:text-[1.25rem]">
                    {plans[OfferIndex].type}
                </span>
                <h1 className="text-white font-[700] uppercase text-[2rem] leading-6 md:text-[2.7rem] md:leading-10">
                    {plans[OfferIndex].name}
                </h1>

                <div className="relative mt-3.5">
                    <ul className="list-disc list-inside w-fit">
                        {(plans[OfferIndex].perks || []).map((perk, index) => (
                            <li
                            key={index}
                            className="text-white/90 leading-relaxed text-[0.82rem] md:text-base font-bold"
                            >
                                {perk}
                            </li>
                        ))}
                    </ul>
                </div>

                </div>
                <img 
                src={plans[OfferIndex].image}
                alt="PlanBG" 
                className="absolute w-full h-full brightness-84 object-cover"
                draggable={false}
                />

                <div className="absolute left-8 bottom-8 flex flex-col">
                    <div className="flex flex-row gap-1">
                        <span className={`font-[600] text-white opacity-95 text-lg ${DiscountedPrice ? "text-white/50 line-through font-medium" : "" }`}>${plans[OfferIndex].price}</span>
                        { DiscountedPrice &&
                        <span className="font-[600] text-white opacity-95 text-lg">${DiscountedPrice}</span>
                        }
                        { DiscountedPrice &&
                        <div className="mt-1 bg-[#d9544ff3] rounded-[10px] text-[0.8rem] flex justify-center items-center pl-1.5 pr-1.5 text-white/90 font-[600] h-[1.125rem]">
                            -{plans[OfferIndex].discount}%
                        </div>
                        }
                    </div>
                    <button 
                    onClick={() => window.open(plans[OfferIndex].redirect, "_blank")}
                    className="text-[#242424] bg-white opacity-95 border-none rounded-[10px] hover:bg-[#ffffffd2] transition p-3 text-center cursor-pointer"
                    >
                        <span className="uppercase font-[800] text-sm opacity-80">Get {plans[OfferIndex].name}</span>
                    </button>
                </div>

                <span className="absolute bottom-0.5 right-2 font-bold text-white/45 text-[9px]">
                    {plans[OfferIndex].offerId}
                </span>

            </motion.div>
        </AnimatePresence>

            {/* Mini Plans thingy From here */}
            <div className="relative w-[18.5%] h-[94%] flex flex-col gap-4 items-center">
                {plans.map((plan, index) => (
                    <div
                    key={index}
                    onClick={() =>  setOfferIndex(index)}
                    className="relative w-[84%] h-[5rem] rounded-[8px] bg-white/7 hover:bg-[#75757541] cursor-pointer transition-colors duration-200 ease flex flex-row items-center gap-3 px-3 overflow-hidden sm:justify-center"
                    >
                        { OfferIndex === index &&
                        <motion.div
                        key={index}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        className="absolute top-0 left-0 h-full bg-[#404044]"
                        transition={{
                            ease: "linear",
                            duration: 8
                        }}
                        onAnimationComplete={incrementOfferIndex}
                        />
                        }

                        <img
                        src={plan.miniImg}
                        alt="MiniImage"
                        className={`w-10 h-14 rounded-[5px] brightness-95 ${OfferIndex === index ? "ZoomAnim" : ""}`}
                        draggable={false}
                        />
                        <span className="hidden md:block text-white/90 z-10 text-[0.9rem] font-[500] w-full">
                            {plan.name}
                        </span>
                    </div> 
                ))}
            </div>
        </div>
    );
};

export default Plans;