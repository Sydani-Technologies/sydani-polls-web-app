import { Chart } from "react-google-charts";

export default function BarChart() {
  const data = [
    ["Employee", "Votes", { role: "style" }, { role: "annotation" }],
    ["Kamal Aminu", 1000, "red", "KA"],
    ["Ademola Bademosi", 1170, "green", "AB"],
    ["Joshua Vatsa", 660, "orange", "JV"],
    ["Ishaq Harun", 1030, "blue", "IH"],
    ["Muhammad Mahmud", 1030, "pink", "MM"],
    ["Emmanuella Osadolor", 1030, "violet", "EO"],
    ["James Chimexx Timart", 1030, "yellow", "JCT"],
    ["Martin Tyler", 1030, "indigo", "MT"],
  ];

  const options = {
    chart: {
      title: "Operations Meeting",
      subtitle: "Star of today's meeting",
    },
  };

  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
