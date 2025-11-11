import React, { useState } from 'react';
import { Mission } from '../../../api/mock';

interface MissionFormProps {
  onSubmit: (mission: Omit<Mission, 'id'>) => void;
  onClose: () => void;
}

const MissionForm = ({ onSubmit, onClose }: MissionFormProps) => {
  const [formData, setFormData] = useState<Omit<Mission, 'id'>>({
    name: '',
    launchDate: '',
    payloadMass: 0,
    orbitAltitude: 0,
    inclination: 0,
    launchSite: 'Kourou',
    status: 'Pending',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === 'payloadMass' || name === 'orbitAltitude' || name === 'inclination'
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.launchDate) return;
    onSubmit(formData);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-[#77003B] text-white p-6 rounded-lg w-full max-w-md mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">New Mission</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Mission name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-white text-[#77003B] rounded focus:outline-none focus:ring-2 focus:ring-[#9b004d]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Launch date</label>
            <input
              type="date"
              name="launchDate"
              value={formData.launchDate}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-white text-[#77003B] rounded focus:outline-none focus:ring-2 focus:ring-[#9b004d]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Payload Mass (kg)</label>
            <input
              type="number"
              name="payloadMass"
              value={formData.payloadMass}
              onChange={handleChange}
              min="0"
              required
              className="w-full px-3 py-2 bg-white text-[#77003B] rounded focus:outline-none focus:ring-2 focus:ring-[#9b004d]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Orbit Altitude (km)</label>
            <input
              type="number"
              name="orbitAltitude"
              value={formData.orbitAltitude}
              onChange={handleChange}
              min="0"
              required
              className="w-full px-3 py-2 bg-white text-[#77003B] rounded focus:outline-none focus:ring-2 focus:ring-[#9b004d]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Inclination (degrees)</label>
            <input
              type="number"
              name="inclination"
              value={formData.inclination}
              onChange={handleChange}
              min="0"
              max="180"
              required
              className="w-full px-3 py-2 bg-white text-[#77003B] rounded focus:outline-none focus:ring-2 focus:ring-[#9b004d]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Launch Site</label>
            <select
              name="launchSite"
              value={formData.launchSite}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-white text-[#77003B] rounded focus:outline-none focus:ring-2 focus:ring-[#9b004d]"
            >
              <option value="Kourou">Kourou</option>
              <option value="Reims test site">Reims test site</option>
              <option value="Paris">Paris</option>
              <option value="Toulouse">Toulouse</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-white text-[#77003B] rounded focus:outline-none focus:ring-2 focus:ring-[#9b004d]"
            >
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div className="flex justify-end gap-2 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-white text-[#77003B] rounded hover:bg-gray-100 transition-colors"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MissionForm;