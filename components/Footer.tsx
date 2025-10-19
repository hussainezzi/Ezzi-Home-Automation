
import React from 'react';

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <li>
        <a href={href} className="text-gray-400 hover:text-white transition-colors duration-300">
            {children}
        </a>
    </li>
);

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 sm:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">EZVIZ Store</h3>
                        <p className="text-gray-400 text-sm">
                            Your one-stop shop for the latest in smart home security. We are the official distributors of EZVIZ products in Pakistan, ensuring quality and reliability.
                        </p>
                    </div>

                    {/* Information */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Information</h3>
                        <ul className="space-y-2 text-sm">
                            <FooterLink href="#">About Us</FooterLink>
                            <FooterLink href="#">Contact Us</FooterLink>
                            <FooterLink href="#">Privacy Policy</FooterLink>
                            <FooterLink href="#">Terms & Conditions</FooterLink>
                        </ul>
                    </div>

                    {/* My Account */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">My Account</h3>
                        <ul className="space-y-2 text-sm">
                            <FooterLink href="#">Sign In</FooterLink>
                            <FooterLink href="#">View Cart</FooterLink>
                            <FooterLink href="#">My Wishlist</FooterLink>
                            <FooterLink href="#">Track My Order</FooterLink>
                        </ul>
                    </div>
                    
                    {/* Contact Us */}
                    <div>
                         <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
                         <ul className="space-y-3 text-sm text-gray-400">
                             <li className="flex items-start">
                                 <span className="mt-1 mr-3 h-4 w-4 text-blue-400">📍</span>
                                 <span>123 Security Avenue, Karachi, Pakistan</span>
                             </li>
                             <li className="flex items-center">
                                 <span className="mr-3 h-4 w-4 text-blue-400">📞</span>
                                 <span>0311-178-6123</span>
                             </li>
                             <li className="flex items-center">
                                 <span className="mr-3 h-4 w-4 text-blue-400">📧</span>
                                 <span>info@ezvizstore.pk</span>
                             </li>
                         </ul>
                    </div>
                </div>
            </div>
            <div className="bg-gray-800 py-4">
                <div className="container mx-auto px-4 sm:px-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} EZVIZ Store Clone. All Rights Reserved. This is a UI clone for demonstration purposes.</p>
                </div>
            </div>
        </footer>
    );
};
