// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Users } from 'lucide-react';
import { Share2 } from 'lucide-react';
import { Telescope } from 'lucide-react';
const Features = () => {
    return (
        <section className="features py-14 text-center dark:bg-slate-900">
            <h2 className="text-4xl font-extrabold mb-10 dark:text-white" style={{fontFamily: "Dancing Script, cursive"}}>Why Hobbyly?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                <div className="feature bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-30 dark:hover:shadow-lg dark:hover:shadow-slate-100">
                <Users style= {{height: '100px', width:'50'}} className="mx-auto mb-6" />
                    <h3 className="text-xl font-semibold">Find Your Community</h3>
                    <p>Connect with hobbyists who share the same interests as you. Explore new communities today.</p>
                </div>
                <div className="feature bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 dark:hover:shadow-lg dark:hover:shadow-slate-100">
                    <Share2 style= {{height: '100px', width:'50px'}} className="mx-auto mb-6" />
                    <h3 className="text-xl font-semibold">Share Your Passion</h3>
                    <p>Post your projects, tips, and experiences with others who appreciate what you love.</p>
                </div>
                <div className="feature bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 dark:hover:shadow-lg dark:hover:shadow-slate-100">
                <Telescope style= {{height: '100px', width:'50px'}} className="mx-auto mb-6" />                    <h3 className="text-xl font-semibold">Discover New Hobbies</h3>
                    <p>Whether it’s photography, painting, or gardening – discover new hobbies every day.</p>
                </div>
            </div>
        </section>
    );
};

export default Features;
