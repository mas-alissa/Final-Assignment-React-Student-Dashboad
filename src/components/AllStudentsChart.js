import React from "react";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

export default function BarChartOfStudens({ data, funOrDiffcult, width }) {

  let widthCart = 40000

  if (width === 56) {
    widthCart = 10000
  } else if (width === 112) {
    widthCart = 20000
  } else {
    widthCart = 40000
  }

  return (
    <>
      {data.length > 0 && (
        <div style={{ overflow: "auto" }}>
          <h1>Chart for all students</h1>
          <BarChart
            BarChart
            width={data.length && widthCart}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Welke opdracht of welk project lever je nu in?" />
            <YAxis />
            <Tooltip />

            {(funOrDiffcult[0].checked && (
              <Bar dataKey="Hoe leuk vond je deze opdracht?" fill="blue" />
            )) ||
              (funOrDiffcult[0].checked === false &&
                funOrDiffcult[1].checked === false && (
                  <Bar dataKey="Hoe leuk vond je deze opdracht?" fill="blue" />
                ))}
            {(funOrDiffcult[1].checked && (
              <Bar dataKey="Hoe moeilijk vond je deze opdracht?" fill="red" />
            )) ||
              (funOrDiffcult[0].checked === false &&
                funOrDiffcult[1].checked === false && (
                  <Bar
                    dataKey="Hoe moeilijk vond je deze opdracht?"
                    fill="red"
                  />
                ))}
            <Bar dataKey="Wie ben je?" fill="green" />
          </BarChart>
        </div>
      )}
    </>
  );
}
