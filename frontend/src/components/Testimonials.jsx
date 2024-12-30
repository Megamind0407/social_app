import { motion } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        name: 'John Doe',
        image: 'https://images.pexels.com/photos/7752810/pexels-photo-7752810.jpeg?auto=compress&cs=tinysrgb&w=600',
        testimonial: "This app has helped me connect with so many like-minded hobbyists. It's been a great experience!",
    },
    {
        id: 2,
        name: 'Jane Smith',
        image: 'https://images.pexels.com/photos/4855373/pexels-photo-4855373.jpeg?auto=compress&cs=tinysrgb&w=600',
        testimonial: "I've discovered new hobbies through this community. So much fun sharing ideas!",
    },
    {
        id: 3,
        name: 'Alex Johnson',
        image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        testimonial: "A great platform for hobby enthusiasts. I've learned a lot from others in the community!",
    },
    {
        id: 4,
        name: 'Emily Davis',
        image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        testimonial: "Finding people who share my passion for photography has been amazing. I love the creative challenges we share!",
    },
    {
        id: 5,
        name: 'Michael Brown',
        image: 'https://images.pexels.com/photos/5920775/pexels-photo-5920775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        testimonial: "I finally found a place where I can geek out about woodworking. It's been inspiring and educational.",
    },
    {
        id: 6,
        name: 'Sophia Williams',
        image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        testimonial: "The crafting tutorials and supportive community here are unmatched. It’s my favorite hobby space online!",
    },
    {
        id: 7,
        name: 'David Miller',
        image: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=600',
        testimonial: "Being a gardening enthusiast, I love how easy it is to share tips and get advice from others.",
    },
    {
        id: 8,
        name: 'Olivia Garcia',
        image: 'https://images.pexels.com/photos/1090387/pexels-photo-1090387.jpeg?auto=compress&cs=tinysrgb&w=600',
        testimonial: "Joining the cooking groups here has been a delicious adventure. The shared recipes are incredible!",
    },
    {
        id: 9,
        name: 'Liam Wilson',
        image: 'https://images.pexels.com/photos/709188/pexels-photo-709188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        testimonial: "Connecting with musicians who love composing as much as I do has been so fulfilling.",
    },
    {
        id: 10,
        name: 'Emma Martinez',
        image: 'https://images.pexels.com/photos/3136340/pexels-photo-3136340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        testimonial: "I didn't know there were so many model train enthusiasts out there. It feels great to connect!",
    },
];

export const Testimonials = () => {
    return (
        <section className='text-center pb-4 dark:bg-slate-950'>
            <h1 className='text-3xl font-extrabold leading-tight mb-4 dark:text-slate-300' style={{ fontFamily: 'Dancing Script, cursive' }}>Our Happy Users</h1>
            <div className="relative overflow-x-hidden px-4 pb-2">
                <motion.div
                    className="flex items-center space-x-8"
                    initial={{ x: "70%" }}
                    animate={{ x: "-100%" }}
                    whileHover={{x: 0}}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear",
                    }}
                >
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="min-w-[350px] bg-white p-6 rounded-lg shadow-lg mx-4 dark:bg-slate-800"
                            style={{
                                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
                            }}
                        >
                            <div className="flex items-center mb-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full object-cover mr-4"
                                />
                                <h3 className="text-xl font-semibold dark:text-slate-300">{testimonial.name}</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 italic text-lg">{testimonial.testimonial}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
