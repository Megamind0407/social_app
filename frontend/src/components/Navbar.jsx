// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link , useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Home, Users, Bell, MessageSquare, Search } from 'lucide-react';
import { Button, Input  } from 'antd'

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

    const handleSignIn = () => {
        navigate('/signin'); // Redirect to the /signin route
    };
    return (
        <nav className="border-b">
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
                    className="pl-8 w-[200px] lg:w-[300px]"
                    />
                    <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
                </div>
                <Button type="text" onClick={handleSignIn}>Sign In</Button>
            </div>
            </div>
        </nav>
    );
};
