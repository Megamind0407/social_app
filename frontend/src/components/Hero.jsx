// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Button } from 'antd'

export const Hero = () => {
    return (
        <section className=" dark:bg-slate-950 h-full flex flex-col pt-10 dark:text-slate-300 justify-start text-primary text-center px-4">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">Connect with Passionate Hobbyists</h1>
            <p className="text-xl md:text-2xl mb-8">Discover, share, and learn new hobbies with a community that shares your interests!</p>
            <div className='mb-20'>
                <Button className="font-semibold dark:bg-slate-50" color="default" size='large'>Join Hobbyly</Button>
            </div>
        </section>
    );
};
