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
            console.log("Sending sign-in request with:", { email, password }); // Debug
            const response = await axios.post("/api/auth/signin", { email, password });
            console.log("Sign-in response:", response.data); // Debug
            const token = response.data.token;
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("userToken", token);
            navigate("/home");
        } catch (err) {
            console.error("Error during sign-in:", err.response || err);
            if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message);
            } else {
                setError("Sign In Failed. Please check your credentials.");
            }
        } finally {
            setIsLoading(false);
        }
    };
    

    return { signIn, isLoading, error };
};

export default useSignIn;
