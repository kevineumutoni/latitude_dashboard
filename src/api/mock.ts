export interface User {
  email: string;
  password: string;
  name: string;
}

export interface Mission {
  id: number;
  name: string;
  launchDate: string; 
  payloadMass: number; 
  orbitAltitude: number; 
  inclination: number; 
  launchSite: string; 
  status: 'Pending' | 'Completed';
}

export const mockUsers: User[] = [
  { email: 'kevine@latitude.com', password: 'password123', name: 'Kevine' },
  { email: 'umutoni@latitude.com', password: 'securepass', name: 'Umutoni' },
  { email: 'bugingo@latitude.com', password: 'letmein', name: 'Bugingo' },
];

export const mockMissions: Mission[] = [
  {
    id: 1,
    name: 'Mission Alpha',
    launchDate: '2025-11-27',
    payloadMass: 120,
    orbitAltitude: 500,
    inclination: 98,
    launchSite: 'Kourou',
    status: 'Pending',
  },
  {
    id: 2,
    name: 'Mission Beta',
    launchDate: '2025-11-28',
    payloadMass: 85,
    orbitAltitude: 300,
    inclination: 60,
    launchSite: 'Reims test site',
    status: 'Completed',
  },
  {
    id: 3,
    name: 'Mission Gamma',
    launchDate: '2025-12-05',
    payloadMass: 200,
    orbitAltitude: 700,
    inclination: 45,
    launchSite: 'Paris',
    status: 'Pending',
  },
  {
    id: 4,
    name: 'PolarEye-1',
    launchDate: '2025-12-10',
    payloadMass: 150,
    orbitAltitude: 800,
    inclination: 97.5,
    launchSite: 'Kourou',
    status: 'Pending',
  },
  {
    id: 5,
    name: 'GeoTrack A',
    launchDate: '2025-11-15',
    payloadMass: 300,
    orbitAltitude: 36000,
    inclination: 0,
    launchSite: 'Kourou',
    status: 'Completed',
  },
  {
    id: 6,
    name: 'OrbitLink X',
    launchDate: '2025-12-18',
    payloadMass: 95,
    orbitAltitude: 550,
    inclination: 53,
    launchSite: 'Toulouse',
    status: 'Pending',
  },
  {
    id: 7,
    name: 'Nexus-3',
    launchDate: '2025-11-20',
    payloadMass: 210,
    orbitAltitude: 600,
    inclination: 98.2,
    launchSite: 'Reims test site',
    status: 'Completed',
  },
  {
    id: 8,
    name: 'StratoScan',
    launchDate: '2025-12-22',
    payloadMass: 130,
    orbitAltitude: 650,
    inclination: 97.8,
    launchSite: 'Paris',
    status: 'Pending',
  },
  {
    id: 9,
    name: 'AeroMap-1',
    launchDate: '2025-11-30',
    payloadMass: 175,
    orbitAltitude: 520,
    inclination: 98,
    launchSite: 'Kourou',
    status: 'Completed',
  },
  {
    id: 10,
    name: 'SkyGrid Zeta',
    launchDate: '2026-01-05',
    payloadMass: 110,
    orbitAltitude: 480,
    inclination: 96.5,
    launchSite: 'Toulouse',
    status: 'Pending',
  },
  {
    id: 11,
    name: 'TerraView Pro',
    launchDate: '2026-01-12',
    payloadMass: 220,
    orbitAltitude: 720,
    inclination: 98.6,
    launchSite: 'Reims test site',
    status: 'Pending',
  },
  {
    id: 12,
    name: 'Horizon-7',
    launchDate: '2025-12-01',
    payloadMass: 190,
    orbitAltitude: 600,
    inclination: 97,
    launchSite: 'Paris',
    status: 'Completed',
  },
];