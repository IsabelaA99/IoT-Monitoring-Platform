import { Activity, Wifi, WifiOff, AlertTriangle, Battery } from "lucide-react";
import { Device } from "../../services/api";

interface DeviceCardProps {
  device: Device;
}

export function DeviceCard({ device }: DeviceCardProps) {
  const getStatusColor = (status: Device['status']) => {
    switch (status) {
      case 'online':
        return 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/30';
      case 'offline':
        return 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/30';
      case 'warning':
        return 'text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-950/30';
    }
  };

  const getStatusIcon = (status: Device['status']) => {
    switch (status) {
      case 'online':
        return <Wifi size={16} />;
      case 'offline':
        return <WifiOff size={16} />;
      case 'warning':
        return <AlertTriangle size={16} />;
    }
  };

  const getBatteryColor = (battery?: number) => {
    if (!battery) return 'text-zinc-400';
    if (battery > 60) return 'text-green-600 dark:text-green-400';
    if (battery > 30) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  return (
    <div className="bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">
            {device.name}
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {device.type}
          </p>
        </div>
        <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(device.status)}`}>
          {getStatusIcon(device.status)}
          <span className="capitalize">{device.status}</span>
        </div>
      </div>

      {device.temperature && (
        <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 mb-2">
          <Activity size={16} />
          <span>{device.temperature}°C</span>
        </div>
      )}

      {device.battery !== undefined && (
        <div className="flex items-center gap-2 text-sm mb-2">
          <Battery size={16} className={getBatteryColor(device.battery)} />
          <span className={getBatteryColor(device.battery)}>{device.battery}%</span>
        </div>
      )}

      <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-3 pt-3 border-t border-zinc-200 dark:border-zinc-700">
        Última atualização: {device.lastUpdate}
      </div>
    </div>
  );
}
