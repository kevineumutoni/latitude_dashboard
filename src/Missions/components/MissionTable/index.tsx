import React, { useState } from 'react';
import MissionModal from '../MissionModal';

interface MissionTableProps {
  missions: {
    id: number;
    name: string;
    launchDate: string;
    status: 'Pending' | 'Completed';
  }[];
  onDelete: (id: number) => void;
}

const MissionTable = ({ missions, onDelete }: MissionTableProps) => {
  const [selectedMission, setSelectedMission] = useState<any>(null);

  const openModal = (mission: any) => {
    setSelectedMission(mission);
  };

  const closeModal = () => {
    setSelectedMission(null);
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-[#fdf5f7]">
          <tr>
            <th className="px-6 py-3 text-left text-lg font-bold text-[#77003B] uppercase tracking-wider">
              Mission name
            </th>
            <th className="px-6 py-3 text-left text-lg font-bold text-[#77003B] uppercase tracking-wider">
              Launch date
            </th>
            <th className="px-6 py-3 text-left text-lg font-bold text-[#77003B] uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-lg font-bold text-[#77003B] uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {missions.map((mission) => (
            <tr key={mission.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#77003B]">
                {mission.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#77003B]">
                {mission.launchDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <span
                  className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    mission.status === 'Pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {mission.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <div className="flex gap-2">
                  <button
                    onClick={() => openModal(mission)}
                    className="px-3 py-1 border border-[#77003B] text-[#77003B] rounded hover:bg-[#fdf5f7] transition-colors"
                  >
                    View
                  </button>
                  <button
                    onClick={() => onDelete(mission.id)}
                    className="px-3 py-1 border border-red-300 text-red-700 rounded hover:bg-red-50 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedMission && (
        <MissionModal mission={selectedMission} onClose={closeModal} />
      )}
    </div>
  );
};

export default MissionTable;