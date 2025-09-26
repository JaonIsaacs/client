import { useEffect, useState } from "react";
import { apiRequest } from "../api";

export default function Dashboard() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    apiRequest("/payments").then(setPayments);
  }, []);

  return (
    <div>
      <h2>Your Payments</h2>
      <ul>
        {payments.map(p => (
          <li key={p._id}>{p.amount} {p.currency} to {p.recipient}</li>
        ))}
      </ul>
    </div>
  );
}
