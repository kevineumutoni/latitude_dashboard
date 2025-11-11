import React, { useState } from 'react';
import { mockMissions, Mission } from '../api/mock';
import MissionTable from './components/MissionTable';
import MissionForm from './components/MissionForm';

const Missions = () => {
  const [missions, setMissions] = useState<Mission[]>(mockMissions);
  const [filter, setFilter] = useState<'All' | 'Pending' | 'Completed'>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showNewMissionForm, setShowNewMissionForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const missionsPerPage = 5;

  const filteredMissions = missions.filter((mission) => {
    const matchesFilter = filter === 'All' || mission.status === filter;
    const matchesSearch =
      mission.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mission.launchSite.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const totalPages = Math.ceil(filteredMissions.length / missionsPerPage);
  const startIndex = (currentPage - 1) * missionsPerPage;
  const paginatedMissions = filteredMissions.slice(startIndex, startIndex + missionsPerPage);

  const handleAddMission = (newMissionData: Omit<Mission, 'id'>) => {
    const newMission: Mission = {
      ...newMissionData,
      id: Math.max(...missions.map(m => m.id), 0) + 1,
    };
    setMissions([newMission, ...missions]);
    setCurrentPage(1);
    setSearchTerm('');
    setFilter('All');
    setShowNewMissionForm(false);
  };

  const handleDelete = (id: number) => {
    setMissions(missions.filter(m => m.id !== id));
    if (filteredMissions.length <= missionsPerPage && currentPage > 1) {
      setCurrentPage(1);
    }
  };

  return (
    <div className="p-8 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#77003B]">Missions</h1>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search missions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-[#77003B] rounded-full focus:outline-none focus:ring-2 focus:ring-[#77003B]"
          />
          <button
            onClick={() => setShowNewMissionForm(true)}
            className="px-4 py-2 bg-[#77003B] text-white rounded-lg hover:bg-[#9b004d] transition-colors"
          >
            New mission +
          </button>
        </div>
      </div>

      <div className="mb-6 flex gap-4">
        <div className="bg-white p-4 border border-[#77003B] rounded-lg">
          <h3 className="text-sm text-[#77003B]">Total missions</h3>
          <p className="text-2xl font-bold">{missions.length}</p>
        </div>
        <div className="bg-white p-4 border border-[#77003B] rounded-lg">
          <h3 className="text-sm text-[#77003B]">Pending</h3>
          <p className="text-2xl font-bold">
            {missions.filter(m => m.status === 'Pending').length}
          </p>
        </div>
        <div className="bg-white p-4 border border-[#77003B] rounded-lg">
          <h3 className="text-sm text-[#77003B]">Completed</h3>
          <p className="text-2xl font-bold">
            {missions.filter(m => m.status === 'Completed').length}
          </p>
        </div>
      </div>

      <div className="flex border-b border-[#77003B] mb-4">
        {(['All', 'Pending', 'Completed'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setFilter(tab);
              setCurrentPage(1);
            }}
            className={`px-6 py-2 font-medium ${
              filter === tab
                ? 'border-b-2 border-[#77003B] text-[#77003B]'
                : 'text-gray-600 hover:text-[#77003B]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <MissionTable missions={paginatedMissions} onDelete={handleDelete} />

      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded ${
              currentPage === 1
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-[#77003B] text-white hover:bg-[#9b004d]'
            }`}
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-10 h-10 rounded-full ${
                currentPage === i + 1
                  ? 'bg-[#77003B] text-white'
                  : 'bg-white text-[#77003B] border border-[#77003B] hover:bg-[#fdf5f7]'
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded ${
              currentPage === totalPages
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-[#77003B] text-white hover:bg-[#9b004d]'
            }`}
          >
            Next
          </button>
        </div>
      )}

      {showNewMissionForm && (
        <MissionForm
          onSubmit={handleAddMission}
          onClose={() => setShowNewMissionForm(false)}
        />
      )}
    </div>
  );
};

export default Missions;