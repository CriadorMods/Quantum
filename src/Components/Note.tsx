import React from "react";

const Note: React.FC = () => {
    return (
        <div className="relative bg-[#1c1c2ce8] px-5 py-2 rounded-[6px] text-center text-[#a6a6a6] text-[14px] scale-[1.1]">
            <b>Note:</b>{" "}
            <span>All of these donation plans are purely cosmetic and do not provide any competitive advantage!</span>
        </div>
    );
};

export default Note;