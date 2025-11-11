import React from 'react';

interface MissionModalProps {
  mission: {
    id: number;
    name: string;
    launchDate: string;
    payloadMass: number;
    orbitAltitude: number;
    inclination: number;
    launchSite: string;
    status: 'Pending' | 'Completed';
  };
  onClose: () => void;
}

const MissionModal = ({ mission, onClose }: MissionModalProps) => {
  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleClickOutside}
    >
      <div className="bg-[#77003B] text-white p-6 rounded-lg w-full max-w-md mx-4">
        <h2 className="text-xl font-bold mb-4">Mission Details</h2>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span>Mission name</span>
            <span>{mission.name}</span>
          </div>
          <div className="flex justify-between">
            <span>Launch date</span>
            <span>{mission.launchDate}</span>
          </div>
          <div className="flex justify-between">
            <span>Status</span>
            <span>{mission.status}</span>
          </div>
          <div className="flex justify-between">
            <span>Payload Mass</span>
            <span>{mission.payloadMass} kg</span>
          </div>
          <div className="flex justify-between">
            <span>Orbit Altitude</span>
            <span>{mission.orbitAltitude} km</span>
          </div>
          <div className="flex justify-between">
            <span>Inclination</span>
            <span>{mission.inclination} deg</span>
          </div>
          <div className="flex justify-between">
            <span>Launch Site</span>
            <span>{mission.launchSite}</span>
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white text-[#77003B] rounded hover:bg-gray-100 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MissionModal;