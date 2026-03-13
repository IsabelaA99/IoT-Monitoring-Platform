// Dados mock para simulação da API

export interface Device {
  id: string;
  name: string;
  type: string;
  status: 'online' | 'offline' | 'warning';
  location: {
    lat: number;
    lng: number;
  };
  temperature?: number;
  battery?: number;
  lastUpdate: string;
}

export interface SensorData {
  time: string;
  temperature: number;
  humidity?: number;
  energy?: number;
}

export interface Alert {
  id: string;
  device: string;
  type: 'warning' | 'critical' | 'info';
  message: string;
  timestamp: string;
}

// Dispositivos mock
const mockDevices: Device[] = [
  {
    id: '1',
    name: 'Sensor Industrial 01',
    type: 'Temperatura',
    status: 'online',
    location: { lat: -23.5505, lng: -46.6333 },
    temperature: 26,
    battery: 87,
    lastUpdate: '2 min atrás'
  },
  {
    id: '2',
    name: 'Rastreador Frota A12',
    type: 'GPS',
    status: 'online',
    location: { lat: -23.5489, lng: -46.6388 },
    battery: 92,
    lastUpdate: '1 min atrás'
  },
  {
    id: '3',
    name: 'Sensor Ambiental 03',
    type: 'Qualidade do Ar',
    status: 'warning',
    location: { lat: -23.5558, lng: -46.6396 },
    temperature: 28,
    battery: 45,
    lastUpdate: '5 min atrás'
  },
  {
    id: '4',
    name: 'Rastreador Frota B04',
    type: 'GPS',
    status: 'online',
    location: { lat: -23.5629, lng: -46.6544 },
    battery: 78,
    lastUpdate: '3 min atrás'
  },
  {
    id: '5',
    name: 'Sensor Industrial 05',
    type: 'Vibração',
    status: 'offline',
    location: { lat: -23.5475, lng: -46.6361 },
    battery: 12,
    lastUpdate: '1 hora atrás'
  },
  {
    id: '6',
    name: 'Rastreador Frota C15',
    type: 'GPS',
    status: 'online',
    location: { lat: -23.5581, lng: -46.6625 },
    battery: 85,
    lastUpdate: '2 min atrás'
  }
];

// Dados de temperatura
const mockTemperatureData: SensorData[] = [
  { time: '08:00', temperature: 22, humidity: 65 },
  { time: '09:00', temperature: 23, humidity: 63 },
  { time: '10:00', temperature: 24, humidity: 60 },
  { time: '11:00', temperature: 25, humidity: 58 },
  { time: '12:00', temperature: 27, humidity: 55 },
  { time: '13:00', temperature: 28, humidity: 53 },
  { time: '14:00', temperature: 26, humidity: 56 },
  { time: '15:00', temperature: 25, humidity: 58 },
];

// Dados de consumo energético
const mockEnergyData: SensorData[] = [
  { time: '08:00', energy: 45 },
  { time: '09:00', energy: 62 },
  { time: '10:00', energy: 78 },
  { time: '11:00', energy: 85 },
  { time: '12:00', energy: 72 },
  { time: '13:00', energy: 68 },
  { time: '14:00', energy: 75 },
  { time: '15:00', energy: 82 },
];

// Alertas mock
const mockAlerts: Alert[] = [
  {
    id: '1',
    device: 'Sensor Industrial 05',
    type: 'critical',
    message: 'Dispositivo offline há mais de 1 hora',
    timestamp: '13:45'
  },
  {
    id: '2',
    device: 'Sensor Ambiental 03',
    type: 'warning',
    message: 'Bateria abaixo de 50%',
    timestamp: '14:20'
  },
  {
    id: '3',
    device: 'Sensor Industrial 01',
    type: 'info',
    message: 'Manutenção preventiva agendada',
    timestamp: '15:00'
  }
];

// Funções da API mock
export const api = {
  getDevices: async (): Promise<Device[]> => {
    // Simula delay de rede
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockDevices;
  },

  getDevice: async (id: string): Promise<Device | null> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockDevices.find(d => d.id === id) || null;
  },

  getTemperatureData: async (): Promise<SensorData[]> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockTemperatureData;
  },

  getEnergyData: async (): Promise<SensorData[]> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockEnergyData;
  },

  getAlerts: async (): Promise<Alert[]> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockAlerts;
  },

  getStats: async () => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return {
      activeDevices: 128,
      alertsToday: 3,
      averageConsumption: 72,
      onlineDevices: mockDevices.filter(d => d.status === 'online').length,
      totalDevices: mockDevices.length
    };
  }
};
