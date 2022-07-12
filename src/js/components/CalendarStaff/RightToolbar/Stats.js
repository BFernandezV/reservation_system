import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#ef4444", "#78716c", "#82ca9d"];
const pieData = [
  {
    name: "Apple",
    value: 54.85,
  },
  {
    name: "Samsung",
    value: 47.91,
  },
  {
    name: "Redmi",
    value: 16.85,
  },
];
const CustomTooltip = ({ active, payload, label }) => {
  var formatter = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  if (active) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "#ffff",
          padding: "5px",
          border: "1px solid #cccc",
        }}
      >
        <label>{`${payload[0].name} : ${payload[0].value} (${formatter.format(
          payload[0].payload.total_amount
        )})`}</label>
      </div>
    );
  }
};
const Stats = (props) => {
  const generate_data = (data_recieved) => {
    let answer = [
      {
        name: "canceladas",
        total_amount: 0,
        value: 0,
      },
      {
        name: "pendientes",
        total_amount: 0,
        value: 0,
      },
      {
        name: "completadas",
        total_amount: 0,
        value: 0,
      },
    ];
    data_recieved.map((reservation) => {
      if (reservation.status === "canceled") {
        answer[0].total_amount += reservation.price;
        answer[0].value++;
      }
      if (reservation.status === "pendiente") {
        answer[1].total_amount += reservation.price;
        answer[1].value++;
      }
      if (reservation.status === "completed") {
        answer[2].total_amount += reservation.price;
        answer[2].value++;
      }
    });

    return answer;
  };
  return (
    <div className="p-3 justify-self-end">
      <h2 className="text-2xl mb-1">Estadísticas</h2>
      <PieChart width={250} height={300}>
        <Pie
          data={generate_data(props.reservations)}
          color="#000000"
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend />
      </PieChart>
    </div>
  );
};
export default Stats;
