import React from 'react';

const HeroSection = () => {
    const imgUrl = 'https://plus.unsplash.com/premium_photo-1671198905435-20f8d166efb2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    return (
        <div style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover' }} className="h-[calc(100vh-145px)] flex items-center justify-center text-white relative my-7">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center px-5 max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold tracking-tight mb-4 leading-tight">
                    Shopping and  Department Store.
                </h2>
                <p className="text-lg text-gray-200 mb-6">
                    Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.
                </p>
                <button className="bg-[#003222] py-2 px-9 text-xl rounded-lg hover:bg-[#003a27] text-white transition duration-300 ease-in-out">
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
