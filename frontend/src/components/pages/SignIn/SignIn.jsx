// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from 'react';
import { Form, Input, Button } from 'antd';
import useSignIn from '../../hooks/useSignIn'; // Adjust the path as necessary
import { ThemeContext } from '../../ThemeContext';
import { Moon, Sun } from 'lucide-react'; // Ant Design icons for Moon and Sun

export const SignIn = () => {
    const { signIn, isLoading, error } = useSignIn(); // Destructure the hook's return
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { theme, toggleTheme } = useContext(ThemeContext);

    const handleSubmit = (values) => {
        const { email, password } = values;
        signIn(email, password); // Call the signIn function from the hook
    };

    return (
        <div className={`flex items-center justify-center h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
            {/* Dark Mode Toggle Button */}
            <button
                onClick={toggleTheme}
                className="absolute top-4 right-4 flex items-center justify-center p-2 bg-gray-200 dark:bg-gray-900 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700"
                aria-label="Toggle Dark Mode"
            >
                {theme === 'light' ? (
                    <Moon className="text-gray-700" style={{ fontSize: '1.5rem' }} />
                ) : (
                    <Sun className="text-yellow-400" style={{ fontSize: '1.5rem' }} />
                )}
            </button>

            <div className={`shadow-md rounded-lg p-8 w-full max-w-md ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
                <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
                {error && <p className="text-slate-500 text-sm mb-4">{error}</p>}
                
                <Form
                    name="signInForm"
                    initialValues={{ remember: true }}
                    onFinish={handleSubmit}
                    layout="vertical"
                >
                    <Form.Item
                        name="email"
                        rules={[
                            { required: true, message: 'Please input your email!' },
                            { type: 'email', message: 'Please enter a valid email!' }
                        ]}
                    >
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            block
                            variant="filled"
                            color="default"
                            loading={isLoading} // Show a loading spinner while the request is in progress
                        >
                            Sign In
                        </Button>
                    </Form.Item>
                </Form>
                
                <p className="text-sm text-center mt-4">
                    Don&apos;t have an account? <a href="/signup" className="text-blue-500">Sign Up</a>
                </p>
            </div>
        </div>
    );
};
