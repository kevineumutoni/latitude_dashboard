import React from 'react';
import {
  Home as HomeIcon,
  RocketLaunch as RocketIcon,
  Person as PersonIcon,
  Logout as LogoutIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';
import DroneIcon from './components/DroneIcon';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  path: string;
  page: 'home' | 'missions' | 'launch' | 'profile' | 'logout';
}

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
  onNavigate?: (page: 'home' | 'missions' | 'launch' | 'profile') => void;
  currentPage?: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  isCollapsed,
  toggleSidebar,
  onNavigate,
  currentPage,
}) => {
  const navItems: NavItem[] = [
    { icon: <HomeIcon fontSize="medium" />, label: 'Home', path: '/', page: 'home' },
    { icon: <RocketIcon fontSize="medium" />, label: 'Missions', path: '/missions', page: 'missions' },
    { icon: <DroneIcon />, label: 'Launch', path: '/launch', page: 'launch' },
  ];

  const bottomItems: NavItem[] = [
    { icon: <PersonIcon fontSize="medium" />, label: 'Profile', path: '/profile', page: 'profile' },
    { icon: <LogoutIcon fontSize="medium" />, label: 'Logout', path: '/logout', page: 'logout' },
  ];

  const handleItemClick = (page: NavItem['page'], e: React.MouseEvent) => {
    e.preventDefault();
    if (page === 'logout') {
      window.location.reload(); 
      return;
    }
    onNavigate?.(page);
  };

  return (
    <div
      className={`fixed left-0 top-0 bg-[#77003B] text-white h-screen flex flex-col z-40 ${
        isCollapsed ? 'w-16' : 'w-64'
      } transition-all duration-300`}
    >
      <div className="p-4 border-b border-gray-900">
        <div className="flex items-center justify-between">
          {!isCollapsed && <h1 className="text-xl font-bold">Mission Control</h1>}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded hover:bg-gray-700 transition"
            title={isCollapsed ? 'Expand' : 'Collapse'}
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <MenuIcon fontSize="medium" />
          </button>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <a
                href={item.path}
                onClick={(e) => handleItemClick(item.page, e)}
                className={`flex items-center space-x-3 p-3 rounded transition ${
                  currentPage === item.page
                    ? 'bg-[#9b004d]'
                    : 'hover:bg-gray-900'
                }`}
              >
                {item.icon}
                {!isCollapsed && <span>{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-700">
        <ul className="space-y-2">
          {bottomItems.map((item) => (
            <li key={item.path}>
              <a
                href={item.path}
                onClick={(e) => handleItemClick(item.page, e)}
                className={`flex items-center space-x-3 p-3 rounded transition text-white hover:bg-gray-900`}
              >
                {item.icon}
                {!isCollapsed && <span>{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;