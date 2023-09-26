import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Cell, Pie, PieChart, Tooltip } from "recharts";
import { getLocalStoredObj } from "../../../public/LocalStorage";

const Statistics = () => {
  const myData = useLoaderData();
  const [storedArray, setStoredArray] = useState([]);
  useEffect(() => {
    const localObj = getLocalStoredObj();
    setStoredArray(localObj);
  }, [myData]);
  const storedDonations = [];
  for (const id of storedArray) {
    const target = myData.find((i) => parseInt(i.id) === parseInt(id));
    if (target) {
      storedDonations.push(target);
    }
  }
  const totalDonation = myData.reduce((a, b) => a + parseInt(b.price), 0);
  const myDonation = storedDonations.reduce((a, b) => a + parseInt(b.price), 0);

  const data = [
    { name: "Total Donation", value: totalDonation },
    { name: "Your Donation", value: myDonation },
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
  const CustomTooltip = ({ lable, active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p
            className="bg-white px-3
           py-1 rounded-md font-semibold"
          >{`$${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  };
  return (
    <div className="">
      <div className="flex items-center justify-center w-1/2 mx-auto mt-10 md:mt-0">
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
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </div>
      <div className="flex gap-5 md:gap-10 justify-center mt-10">
        <div className="flex items-center gap-3 md:gap-5">
          <p className="text-[#0b0b0b] text-lg">Your Donation</p>
          <span className="w-[50px] md:w-[100px] h-[10px] rounded bg-[#00C49F]"></span>
        </div>
        <div className="flex items-center gap-3 md:gap-5">
          <p className="text-[#0b0b0b] text-lg">Total Donation</p>
          <span className="w-[50px] md:w-[100px] h-[10px] rounded bg-[#FF444A]"></span>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
