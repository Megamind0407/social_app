// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Form, Input, Button, Select} from 'antd';
import { useNavigate } from 'react-router-dom';
import { useSignUp } from '../../hooks/useSignUp'; // Import the custom hook

const { Option } = Select;

export const SignUp = () => {
    const navigate = useNavigate();
    const { formData, error, handleSignUp, handleChange, handleHobbiesChange } = useSignUp();

    const onFinish = (values) => {
        // If form is valid, navigate to the SignIn page
        if (handleSignUp(values)) {
            navigate('/signin');
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-none-100">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Sign Up</h2>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                <Form
                    name="signUpForm"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
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
                        label="Hobbies"
                        name="hobbies"
                        rules={[{ required: true, message: 'Please select at least one hobby!' }]}
                    >
                        <Select
                            mode="tags"
                            placeholder="Select or type your hobbies"
                            onChange={handleHobbiesChange}
                            value={formData.hobbies}
                        >
                            <Option value="Photography">Photography</Option>
                            <Option value="Gardening">Gardening</Option>
                            <Option value="Cooking">Cooking</Option>
                            <Option value="Traveling">Traveling</Option>
                            <Option value="Gaming">Gaming</Option>
                            <Option value="Reading">Reading</Option>
                            <Option value="Driving">Driving</Option>
                            <Option value="Dancing">Dancing</Option>
                            <Option value="Singing">Singing</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            block
                            variant="filled"
                            color="default"
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
