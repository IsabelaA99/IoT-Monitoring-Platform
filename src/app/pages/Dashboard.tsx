import { useState, useEffect } from "react";
import { Activity, AlertTriangle, Zap, TrendingUp } from "lucide-react";
import { api, Device, SensorData, Alert } from "../services/api";
import { DeviceCard } from "../components/dashboard/DeviceCard";
import { TemperatureChart } from "../components/dashboard/TemperatureChart";
import { EnergyChart } from "../components/dashboard/EnergyChart";
import { FleetMap } from "../components/dashboard/FleetMap";

export function Dashboard() {
  const [devices, setDevices] = useState<Device[]>([]);
  const [temperatureData, setTemperatureData] = useState<SensorData[]>([]);
  const [energyData, setEnergyData] = useState<SensorData[]>([]);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [stats, setStats] = useState({
    activeDevices: 0,
    alertsToday: 0,
    averageConsumption: 0,
    onlineDevices: 0,
    totalDevices: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [devicesData, tempData, energyDataRes, alertsData, statsData] = await Promise.all([
          api.getDevices(),
          api.getTemperatureData(),
          api.getEnergyData(),
          api.getAlerts(),
          api.getStats(),
        ]);

        setDevices(devicesData);
        setTemperatureData(tempData);
        setEnergyData(energyDataRes);
        setAlerts(alertsData);
        setStats(statsData);
      } catch (error) {
        console.error("Error loading dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const getAlertColor = (type: Alert['type']) => {
    switch (type) {
      case 'critical':
        return 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800 text-red-900 dark:text-red-200';
      case 'warning':
        return 'bg-yellow-50 dark:bg-yellow-950/30 border-yellow-200 dark:border-yellow-800 text-yellow-900 dark:text-yellow-200';
      case 'info':
        return 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-200';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-zinc-600 dark:text-zinc-400">Carregando dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
            Dashboard Demo
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Monitoramento em tempo real de dispositivos IoT
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">
                  Dispositivos Ativos
                </p>
                <p className="text-3xl font-bold text-zinc-900 dark:text-white">
                  {stats.activeDevices}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950 rounded-lg flex items-center justify-center">
                <Activity className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">
                  Alertas Hoje
                </p>
                <p className="text-3xl font-bold text-zinc-900 dark:text-white">
                  {stats.alertsToday}
                </p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-950 rounded-lg flex items-center justify-center">
                <AlertTriangle className="text-yellow-600 dark:text-yellow-400" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">
                  Consumo Médio
                </p>
                <p className="text-3xl font-bold text-zinc-900 dark:text-white">
                  {stats.averageConsumption}%
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-950 rounded-lg flex items-center justify-center">
                <Zap className="text-purple-600 dark:text-purple-400" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">
                  Taxa Online
                </p>
                <p className="text-3xl font-bold text-zinc-900 dark:text-white">
                  {Math.round((stats.onlineDevices / stats.totalDevices) * 100)}%
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-950 rounded-lg flex items-center justify-center">
                <TrendingUp className="text-green-600 dark:text-green-400" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <TemperatureChart data={temperatureData} />
          <EnergyChart data={energyData} />
        </div>

        {/* Alerts */}
        {alerts.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
              Alertas Recentes
            </h2>
            <div className="space-y-3">
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`border rounded-lg p-4 ${getAlertColor(alert.type)}`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium mb-1">{alert.device}</p>
                      <p className="text-sm">{alert.message}</p>
                    </div>
                    <span className="text-sm opacity-75">{alert.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Devices Grid */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
            Dispositivos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {devices.map((device) => (
              <DeviceCard key={device.id} device={device} />
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="mb-8">
          <FleetMap devices={devices} />
        </div>
      </div>
    </div>
  );
}
