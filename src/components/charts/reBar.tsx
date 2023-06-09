import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function RechartsBarChart() {
  const data = [
    { employee: "Kamal Aminu", votes: 1000, fill: "#1f77b4" },
    { employee: "Ademola Bademosi", votes: 1170, fill: "green" },
    { employee: "Joshua Vatsa", votes: 660, fill: "orange" },
    { employee: "Ishaq Harun", votes: 1030, fill: "pink" },
    { employee: "Muhammad Mahmud", votes: 1030, fill: "red" },
    { employee: "Emmanuella Osadolor", votes: 1030, fill: "#474747" },
    { employee: "James Chimexx Timart", votes: 1030, fill: "blue" },
    { employee: "Martin Tyler", votes: 1030, fill: "silver" },
  ];

  return (
    <BarChart width={600} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="employee" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey={`votes`} />
    </BarChart>
  );
}
