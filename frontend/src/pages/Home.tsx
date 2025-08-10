import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/alerts")
      .then(res => setAlerts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Recent Alerts</h2>
      {alerts.length === 0 ? (
        <p>No alerts yet.</p>
      ) : (
        <div className="grid gap-4">
          {alerts.map((alert: any) => (
            <div key={alert._id} className="p-4 border rounded-lg shadow">
              <h3 className="text-lg font-semibold">{alert.title}</h3>
              <p className="text-sm text-gray-600">{alert.location}</p>
              <p className="text-xs text-gray-500">{alert.time}</p>
              <p className="mt-2">{alert.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
