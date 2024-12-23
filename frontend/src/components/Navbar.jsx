// eslint-disable-next-line no-unused-vars
import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Avatar, Dropdown, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Home, Users, Bell, MessageSquare, Moon, Sun } from "lucide-react";
import { ThemeContext } from "./ThemeContext";

export const Navbar = () => {
    const navigate = useNavigate();
    const { theme, toggleTheme } = useContext(ThemeContext);

    // Authentication state
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if the user is logged in from localStorage
        const loggedIn = localStorage.getItem("isLoggedIn") === "true";
        setIsLoggedIn(loggedIn);
    }, []);

    const handleSignOut = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userToken");
        setIsLoggedIn(false);
        navigate("/signin"); // Redirect to sign-in page on logout
    };

    const menu = (
        <Menu
            items={[
                {
                    key: "logout",
                    label: (
                        <div
                            onClick={handleSignOut}
                            className="cursor-pointer hover:bg-gray-100 p-2 text-red-600"
                        >
                            Logout
                        </div>
                    ),
                },
            ]}
        />
    );

    return (
        <nav className="border-b dark:bg-slate-900 dark:text-slate-300">
            <div className="flex items-center justify-between px-4 py-3 md:px-6">
                <div className="flex items-center">
                    <Link to="/" className="text-2xl font-bold text-primary mr-6">
                        Hobbyly
                    </Link>
                    <div className="hidden md:flex space-x-4">
                        <Link to="/home" className="flex items-center text-sm font-medium text-muted-foreground hover:text-purple-600 dark:hover:text-white">
                            <Home className="h-4 w-4 mr-2" /> Home
                        </Link>
                        <Link to="/users" className="flex items-center text-sm font-medium text-muted-foreground hover:text-purple-600 dark:hover:text-white">
                            <Users className="h-4 w-4 mr-2" /> Users
                        </Link>
                        <Link to="/home" className="flex items-center text-sm font-medium text-muted-foreground hover:text-purple-600 dark:hover:text-white">
                            <Bell className="h-4 w-4 mr-2" /> Notifications
                        </Link>
                        <Link to="/messages" className="flex items-center text-sm font-medium text-muted-foreground hover:text-purple-600 dark:hover:text-white">
                            <MessageSquare className="h-4 w-4 mr-2" /> Messages
                        </Link>
                    </div>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                    {isLoggedIn ? (
                        <Dropdown overlay={menu} trigger={["click"]} placement="bottomRight">
                            <Avatar icon={<UserOutlined />} className="cursor-pointer" />
                        </Dropdown>
                    ) : (
                        <Button type="text" onClick={() => navigate("/signin")} className="dark:text-white">
                            Sign In
                        </Button>
                    )}
                    <button
                        onClick={toggleTheme}
                        className="flex items-center justify-center p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700"
                        aria-label="Toggle Dark Mode"
                    >
                        {theme === "light" ? (
                            <Moon className="h-5 w-5 text-gray-700" />
                        ) : (
                            <Sun className="h-5 w-5 text-yellow-400" />
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
};
