import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useSignIn = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const signIn = async (email, password) => {
        setIsLoading(true);
        try {
            const response = await axios.post("/api/auth/signin", { email, password });
            const token = response.data.token;
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("userToken", token);
            navigate("/home");  // Redirect to home page after successful login
        } catch (err) {
            setError("Sign In Failed. Please check your credentials.");
            console.error("Error during sign-in:", err);
        } finally {
            setIsLoading(false);
        }
    };

    return { signIn, isLoading, error };
};

export default useSignIn;
