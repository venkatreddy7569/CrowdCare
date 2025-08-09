import { useEffect, useState } from "react";
import { getRecentAlerts } from "../services/alertServices";

export default function Home() {
  const [alerts, setAlerts] = useState<any[]>([]);

  useEffect(() => {
    getRecentAlerts().then((data) => setAlerts(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Recent Alerts</h1>
      <div className="space-y-4">
        {alerts.length > 0 ? (
          alerts.map((alert) => (
            <div
              key={alert._id}
              className="border p-4 rounded-lg shadow-md bg-white"
            >
              <h2 className="text-xl font-semibold">{alert.title}</h2>
              <p className="text-gray-600">{alert.description}</p>
              <p className="text-sm text-gray-500">
                Location: {alert.location}
              </p>
            </div>
          ))
        ) : (
          <p>No alerts yet.</p>
        )}
      </div>
    </div>
  );
}
