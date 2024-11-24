// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Button } from 'antd'
// import { motion } from 'framer-motion';

// const testimonials = [
//     {
//         id: 1,
//         name: 'John Doe',
//         image: 'https://images.pexels.com/photos/7752810/pexels-photo-7752810.jpeg?auto=compress&cs=tinysrgb&w=600',
//         testimonial: "This app has helped me connect with so many like-minded hobbyists. It's been a great experience!",
//     },
//     {
//         id: 2,
//         name: 'Jane Smith',
//         image: 'https://images.pexels.com/photos/4855373/pexels-photo-4855373.jpeg?auto=compress&cs=tinysrgb&w=600',
//         testimonial: "I've discovered new hobbies through this community. So much fun sharing ideas!",
//     },
//     {
//         id: 3,
//         name: 'Alex Johnson',
//         image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//         testimonial: "A great platform for hobby enthusiasts. I've learned a lot from others in the community!",
//     },
//     {
//         id: 4,
//         name: 'Emily Davis',
//         image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//         testimonial: "Finding people who share my passion for photography has been amazing. I love the creative challenges we share!",
//     },
//     {
//         id: 5,
//         name: 'Michael Brown',
//         image: 'https://images.pexels.com/photos/5920775/pexels-photo-5920775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//         testimonial: "I finally found a place where I can geek out about woodworking. It's been inspiring and educational.",
//     },
//     {
//         id: 6,
//         name: 'Sophia Williams',
//         image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//         testimonial: "The crafting tutorials and supportive community here are unmatched. It’s my favorite hobby space online!",
//     },
//     {
//         id: 7,
//         name: 'David Miller',
//         image: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=600',
//         testimonial: "Being a gardening enthusiast, I love how easy it is to share tips and get advice from others.",
//     },
//     {
//         id: 8,
//         name: 'Olivia Garcia',
//         image: 'https://images.pexels.com/photos/1090387/pexels-photo-1090387.jpeg?auto=compress&cs=tinysrgb&w=600',
//         testimonial: "Joining the cooking groups here has been a delicious adventure. The shared recipes are incredible!",
//     },
//     {
//         id: 9,
//         name: 'Liam Wilson',
//         image: 'https://images.pexels.com/photos/709188/pexels-photo-709188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//         testimonial: "Connecting with musicians who love composing as much as I do has been so fulfilling.",
//     },
//     {
//         id: 10,
//         name: 'Emma Martinez',
//         image: 'https://images.pexels.com/photos/3136340/pexels-photo-3136340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//         testimonial: "I didn't know there were so many model train enthusiasts out there. It feels great to connect!",
//     },
// ];


export const Hero = () => {
    return (
        <section className="h-full flex flex-col mt-10 justify-start text-primary text-center px-4">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">Connect with Passionate Hobbyists</h1>
            <p className="text-xl md:text-2xl mb-8">Discover, share, and learn new hobbies with a community that shares your interests!</p>
            <div className='mb-20'>
                <Button className="font-semibold" type="primary" color="default" variant="filled" size='large'>Join Hobbyly</Button>
            </div>
        </section>
    )
}
