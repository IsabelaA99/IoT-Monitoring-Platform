import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Device } from "../../services/api";

interface FleetMapProps {
  devices: Device[];
}

// Fix for default marker icons in React Leaflet
const icon = L.icon({
  iconUrl: "data:image/svg+xml,%3Csvg width='25' height='41' viewBox='0 0 25 41' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.5 0C5.596 0 0 5.596 0 12.5c0 9.375 12.5 28.125 12.5 28.125S25 21.875 25 12.5C25 5.596 19.404 0 12.5 0z' fill='%233b82f6'/%3E%3Ccircle cx='12.5' cy='12.5' r='6' fill='white'/%3E%3C/svg%3E",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const iconWarning = L.icon({
  iconUrl: "data:image/svg+xml,%3Csvg width='25' height='41' viewBox='0 0 25 41' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.5 0C5.596 0 0 5.596 0 12.5c0 9.375 12.5 28.125 12.5 28.125S25 21.875 25 12.5C25 5.596 19.404 0 12.5 0z' fill='%23eab308'/%3E%3Ccircle cx='12.5' cy='12.5' r='6' fill='white'/%3E%3C/svg%3E",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const iconOffline = L.icon({
  iconUrl: "data:image/svg+xml,%3Csvg width='25' height='41' viewBox='0 0 25 41' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.5 0C5.596 0 0 5.596 0 12.5c0 9.375 12.5 28.125 12.5 28.125S25 21.875 25 12.5C25 5.596 19.404 0 12.5 0z' fill='%23ef4444'/%3E%3Ccircle cx='12.5' cy='12.5' r='6' fill='white'/%3E%3C/svg%3E",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

function MapBounds({ devices }: { devices: Device[] }) {
  const map = useMap();

  useEffect(() => {
    if (devices.length > 0) {
      const bounds = L.latLngBounds(
        devices.map(d => [d.location.lat, d.location.lng])
      );
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [devices, map]);

  return null;
}

export function FleetMap({ devices }: FleetMapProps) {
  const getIcon = (status: Device['status']) => {
    switch (status) {
      case 'warning':
        return iconWarning;
      case 'offline':
        return iconOffline;
      default:
        return icon;
    }
  };

  const center: [number, number] = devices.length > 0 
    ? [devices[0].location.lat, devices[0].location.lng]
    : [-23.5505, -46.6333]; // São Paulo

  return (
    <div className="bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 overflow-hidden">
      <div className="p-4 border-b border-zinc-200 dark:border-zinc-700">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
          Mapa da Frota
        </h3>
      </div>
      <div className="h-[500px] relative">
        <MapContainer
          center={center}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
          className="z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapBounds devices={devices} />
          {devices.map((device) => (
            <Marker
              key={device.id}
              position={[device.location.lat, device.location.lng]}
              icon={getIcon(device.status)}
            >
              <Popup>
                <div className="text-sm">
                  <p className="font-semibold">{device.name}</p>
                  <p className="text-zinc-600">{device.type}</p>
                  <p className="capitalize mt-1">
                    Status: <span className={
                      device.status === 'online' ? 'text-green-600' :
                      device.status === 'warning' ? 'text-yellow-600' :
                      'text-red-600'
                    }>{device.status}</span>
                  </p>
                  {device.temperature && (
                    <p className="mt-1">Temp: {device.temperature}°C</p>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
