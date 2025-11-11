import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Signin from './Signin';
import Missions from './Missions';
import FeaturePlaceholder from './Missions/components/FeaturePlaceholder';

type Page = 'missions' | 'home' | 'launch' | 'profile';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('missions'); 

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLogin = () => {
    setAuthenticated(true);
  };

  const handleNavigation = (page: Page) => {
    setCurrentPage(page);
  };

  if (!authenticated) {
    return <Signin onLogin={handleLogin} />;
  }

  const sidebarWidth = isCollapsed ? 64 : 256;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar
        isCollapsed={isCollapsed}
        toggleSidebar={toggleSidebar}
        onNavigate={handleNavigation}
        currentPage={currentPage}
      />

      <main
        className="flex-1 p-8 transition-all duration-300"
        style={{ paddingLeft: `${sidebarWidth}px` }}
      >
        {currentPage === 'missions' && <Missions />}
        {currentPage === 'home' && <FeaturePlaceholder feature="Home Dashboard" />}
        {currentPage === 'launch' && <FeaturePlaceholder feature="Launch Control" />}
        {currentPage === 'profile' && <FeaturePlaceholder feature="User Profile" />}
      </main>
    </div>
  );
}

export default App;