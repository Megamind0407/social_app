// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = (values) => {
        const { email, password } = values;
        if (!email || !password) {
            setError('All fields are required.');
        } else {
            setError('');
            message.success('Sign In Successful');
            navigate('/home')
            console.log('Signing in:', { email, password });
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-none-100">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Sign In</h2>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                
                <Form
                    name="signInForm"
                    initialValues={{ remember: true }}
                    onFinish={handleSignIn}
                    layout="vertical"
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'Please enter a valid email!' }]}
                    >
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                    </Form.Item>
                    
                    <Form.Item
                        label="Password"
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
                            variant='filled'
                            color='default'
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
