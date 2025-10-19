
import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';

const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
    </svg>
);

const CartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            {/* Top Bar */}
            <div className="bg-gray-800 text-white text-xs px-4 sm:px-8 py-2">
                <div className="container mx-auto flex justify-between items-center">
                    <p>Welcome to Pakistan's #1 Security Camera Store!</p>
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="mailto:info@ezvizstore.pk" className="hover:text-blue-400 transition-colors">info@ezvizstore.pk</a>
                        <span>|</span>
                        <a href="tel:03111-786-123" className="hover:text-blue-400 transition-colors">03111-786-123</a>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="container mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-blue-600">
                    <a href="#">EZVIZ Store</a>
                </div>
                
                <nav className="hidden lg:flex items-center space-x-8">
                    {NAV_LINKS.map(link => (
                        <a key={link} href="#" className="text-gray-600 font-medium hover:text-blue-600 transition-colors pb-1 border-b-2 border-transparent hover:border-blue-600">
                            {link}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center space-x-4">
                    <button className="text-gray-600 hover:text-blue-600 transition-colors"><SearchIcon /></button>
                    <button className="text-gray-600 hover:text-blue-600 transition-colors"><UserIcon /></button>
                    <button className="relative text-gray-600 hover:text-blue-600 transition-colors">
                        <HeartIcon />
                        <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
                    </button>
                    <button className="relative text-gray-600 hover:text-blue-600 transition-colors">
                        <CartIcon />
                        <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
                    </button>
                    <button className="lg:hidden text-gray-600 hover:text-blue-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <MenuIcon />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-200">
                    <nav className="flex flex-col items-center space-y-4 py-4">
                        {NAV_LINKS.map(link => (
                            <a key={link} href="#" className="text-gray-600 font-medium hover:text-blue-600 transition-colors">
                                {link}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};
