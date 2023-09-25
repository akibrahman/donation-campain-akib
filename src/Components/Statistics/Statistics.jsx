import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Cell, Pie, PieChart } from "recharts";
import { getLocalStoredObj } from "../../../public/LocalStorage";
// import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const Statistics = () => {
  const myData = useLoaderData();
  const [storedArray, setStoredArray] = useState([]);
  useEffect(() => {
    const localStoredData = [];
    const localObj = getLocalStoredObj();
    for (const id of localObj) {
      const target = myData.find((obj) => parseInt(obj.id) === parseInt(id));
      if (target) {
        localStoredData.push(target);
      }
    }
    setStoredArray(localStoredData);
  }, [myData]);
  const myDonation = storedArray.reduce((a, b) => a + parseInt(b.price), 0);
  const totalDonation = myData.reduce((a, b) => a + parseInt(b.price), 0);

  const data = [
    { name: "Group A", value: totalDonation },
    { name: "Group B", value: myDonation },
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

export default Statistics;
