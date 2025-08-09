import axios from "axios";

const API_URL = "http://localhost:5000/api/alerts"; // backend endpoint

export async function getRecentAlerts() {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (err) {
    console.error("Error fetching alerts", err);
    return [];
  }
}
