import { useState } from 'react';
import { message } from 'antd';

export const useSignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        hobbies: [],
    });
    const [error, setError] = useState('');

    const handleSignUp = (values) => {
        const { username, email, password, hobbies } = values;

        if (!username || !email || !password || hobbies.length === 0) {
            setError('All fields are required, including hobbies.');
        } else {
            setError('');
            message.success('Sign Up Successful');
            // Log specific parts of the data to avoid circular reference errors
            console.log('Signing up:', {
                username,
                email,
                hobbies,
            });
            return true; // Indicate that the form is valid and submission can proceed
        }
        return false; // Indicate that the form has errors
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleHobbiesChange = (selectedHobbies) => {
        setFormData({ ...formData, hobbies: selectedHobbies });
    };

    return { formData, error, handleSignUp, handleChange, handleHobbiesChange };
};
