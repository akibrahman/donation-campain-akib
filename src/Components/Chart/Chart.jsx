import { Cell, Pie, PieChart } from "recharts";
import logo from "/Logo.png";
// import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const Chart = () => {
  const data = [
    { name: "Group A", value: 600 },
    { name: "Group B", value: 300 },
  ];
  const COLORS = ["#FF444A", "#00C49F"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className="">
      <nav className="w-[85%] mx-auto flex justify-between items-center pt-9">
        <div className="">
          <img className="w-56" src={logo} alt="" />
        </div>
        <div className="flex items-center gap-12 list-none">
          <li className="text-[#0b0b0b] text-lg active">Home</li>
          <li className="text-[#0b0b0b] text-lg">Donation</li>
          <li className="text-[#0b0b0b] text-lg">Statistics</li>
        </div>
      </nav>
      <div className="flex items-center justify-center">
        <PieChart className="" width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={180}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className="flex gap-10 justify-center mt-10">
        <div className="flex items-center gap-5">
          <p className="text-[#0b0b0b] text-lg">Your Donation</p>
          <span className="w-[100px] h-[10px] rounded bg-[#00C49F]"></span>
        </div>
        <div className="flex items-center gap-5">
          <p className="text-[#0b0b0b] text-lg">Total Donation</p>
          <span className="w-[100px] h-[10px] rounded bg-[#FF444A]"></span>
        </div>
      </div>
    </div>
  );
};

export default Chart;
