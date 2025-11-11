import type { ReactNode } from 'react';

interface SidebarItemProps {
  icon: ReactNode;
  label: string;
  isCollapsed: boolean;
  isActive?: boolean;
}

const SidebarItem = ({ icon, label, isCollapsed, isActive = false }: SidebarItemProps) => {
  return (
    <div
      className={`flex items-center px-4 py-3 cursor-pointer transition-colors rounded-md mx-3 ${
        isActive ? 'bg-[#9b1f5a]' : 'hover:bg-[#6a0d3e]'
      }`}
    >
      <span className="text-xl">{icon}</span>
      {!isCollapsed && <span className="ml-4 font-medium text-white">{label}</span>}
    </div>
  );
};

export default SidebarItem;