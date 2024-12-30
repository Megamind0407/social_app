// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="border-t text-primary py-5 text-center dark:bg-slate-900 dark:text-white">
            <div className="mb-6">
                <Link href="/terms" className="mx-6 hover:text-purple-500">Terms & Conditions</Link>
                <Link href="/privacy" className="mx-6 hover:text-purple-500">Privacy Policy</Link>
                <Link href="/about" className="mx-6 hover:text-purple-500">About Us</Link>
            </div>
            <div className="mt-6">
                <Link to="https://facebook.com" className="mx-4 hover:text-purple-500">Facebook</Link>
                <Link to="https://twitter.com" className="mx-4 hover:text-purple-500">Twitter</Link>
                <Link href="https://instagram.com" className="mx-4 hover:text-purple-500">Instagram</Link>
            </div>
            <div className='flex items-center justify-end p-3'>&#169; 2024 Hobbyly. All rights reserved.</div>
        </footer>
    );
};

export default Footer;
