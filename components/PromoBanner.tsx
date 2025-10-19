
import React from 'react';

export const PromoBanner: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-8">
                <div className="relative rounded-lg overflow-hidden bg-gray-800 text-white">
                    <img 
                        src="https://picsum.photos/seed/promo/1200/400" 
                        alt="Smart Home Promotion"
                        className="absolute w-full h-full object-cover opacity-30"
                    />
                    <div className="relative p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between">
                        <div className="text-center md:text-left mb-8 md:mb-0">
                            <h2 className="text-3xl sm:text-4xl font-bold">Smart Home Integration</h2>
                            <p className="mt-4 text-lg text-gray-300 max-w-xl">
                                Connect your EZVIZ cameras with your favorite smart home ecosystems for seamless control and automation.
                            </p>
                        </div>
                        <a 
                            href="#"
                            className="bg-white text-gray-900 font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105 whitespace-nowrap"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
