// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';

export const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');

    const handleSignUp = (values) => {
        const { username, email, password, confirmPassword } = values;

        if (!username || !email || !password || !confirmPassword) {
            setError('All fields are required.');
        } else if (password !== confirmPassword) {
            setError('Passwords do not match.');
        } else {
            setError('');
            // Add your sign-up logic here
            message.success('Sign Up Successful');
            console.log('Signing up:', formData);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="flex items-center justify-center h-screen bg-none-100">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Sign Up</h2>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                <Form
                    name="signUpForm"
                    initialValues={{ remember: true }}
                    onFinish={handleSignUp}
                    layout="vertical"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Choose a username"
                        />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'Please enter a valid email!' }]}
                    >
                        <Input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                        />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Create a password"
                        />
                    </Form.Item>

                    <Form.Item
                        label="Confirm Password"
                        name="confirmPassword"
                        rules={[{ required: true, message: 'Please confirm your password!' }]}
                    >
                        <Input.Password
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm your password"
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
                            Sign Up
                        </Button>
                    </Form.Item>
                </Form>

                <p className="text-sm text-center mt-4">
                    Already have an account? <a href="/signin" className="text-blue-500">Sign In</a>
                </p>
            </div>
        </div>
    );
};