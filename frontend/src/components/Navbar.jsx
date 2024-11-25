// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Home, Users, Bell, MessageSquare, Search, Moon, Sun } from 'lucide-react';
import { Button, Input  } from 'antd'
import { ThemeContext } from './ThemeContext';

function NavItem({ to, icon, children }) {
    return (
        <Link
            to={to}
            className="flex items-center text-sm font-medium text-muted-foreground hover:text-purple-600"
        >
            {icon}
            {children}
        </Link>
    );
}

// Add prop validation for NavItem
NavItem.propTypes = {
    to: PropTypes.string.isRequired,
    icon: PropTypes.node,
    children: PropTypes.node,
};

NavItem.defaultProps = {
    icon: null,
    children: null,
};

export const Navbar = () => {   
    const navigate = useNavigate(); // Hook to handle navigation
    const {theme, toggleTheme} = useContext(ThemeContext)
    const handleSignIn = () => {
        navigate('/signin'); // Redirect to the /signin route
    };
    return (
        <nav className="border-b dark:bg-slate-900 dark:text-white">
            <div className="flex items-center justify-between px-4 py-3 md:px-6">
                <div className="flex items-center">
                    <Link to="/" className="text-2xl font-bold text-primary mr-6">
                        Hobbyly
                    </Link>
                    <div className="hidden md:flex space-x-4">
                        <NavItem to="/" icon={<Home className="h-4 w-4 mr-2" />} >
                            Home
                        </NavItem>
                        <NavItem to="/" icon={<Users className="h-4 w-4 mr-2" />} >
                            Users
                        </NavItem>
                        <NavItem to="/" icon={<Bell className="h-4 w-4 mr-2" />} >
                            Notifications
                        </NavItem>
                        <NavItem to="/" icon={<MessageSquare className="h-4 w-4 mr-2" />} >
                            Messages
                        </NavItem>
                    </div>
                </div>
            <div className='hidden md:flex items-center space-x-4'>
                <div className="relative">
                    <Input 
                    size='large'  
                    type="search"
                    placeholder="Search..." 
                    className="dark:bg-slate-900 pl-8 w-[200px] lg:w-[300px]"
                    />
                    <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
                </div>
                <Button type="text" onClick={handleSignIn} className='dark:text-white'>Sign In</Button>
                <button
                        onClick={toggleTheme}
                        className="flex items-center justify-center p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700"
                        aria-label="Toggle Dark Mode"
                    >
                        {theme === 'light' ? (
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
