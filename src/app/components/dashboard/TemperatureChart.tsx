import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { SensorData } from "../../services/api";

interface TemperatureChartProps {
  data: SensorData[];
}

export function TemperatureChart({ data }: TemperatureChartProps) {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 p-6">
      <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">
        Temperatura & Umidade
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.2} />
          <XAxis 
            dataKey="time" 
            stroke="#6b7280"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="#6b7280"
            style={{ fontSize: '12px' }}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: '#1f2937',
              border: '1px solid #374151',
              borderRadius: '8px',
              color: '#fff'
            }}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="temperature" 
            stroke="#3b82f6" 
            strokeWidth={2}
            name="Temperatura (°C)"
            dot={{ fill: '#3b82f6', r: 4 }}
            activeDot={{ r: 6 }}
          />
          {data[0]?.humidity !== undefined && (
            <Line 
              type="monotone" 
              dataKey="humidity" 
              stroke="#10b981" 
              strokeWidth={2}
              name="Umidade (%)"
              dot={{ fill: '#10b981', r: 4 }}
              activeDot={{ r: 6 }}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
