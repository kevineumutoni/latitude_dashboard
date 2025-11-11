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

export interface NewMissionFormProps {
  onSubmit: (mission: Omit<Mission, 'id'>) => void;
  onClose: () => void;
}