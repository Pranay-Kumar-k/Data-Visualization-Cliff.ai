import React from "react";
import {
  LineChart,
  Area,
  Line,
  XAxis,
  YAxis,
  AreaChart,
  Tooltip,
  Legend
} from "recharts";

// Getting data from parent component
// filtering data according to the line_status
// Passing data to LineChart

export default function ChartItem({data}) {
    console.log(data.data)
  const chartData = data.data.map((item) => {
    return {
      ...item,
      timestamp: new Date(item.timestamp).toLocaleDateString()
    };
  });

  const filteredData = data.data.map((item) => {
    if (item.line_status > 0) {
      return {
        ...item,
        timestamp: new Date(item.timestamp).toLocaleDateString(),
        value: item.original_value
      };
    }
    return {
      ...item,
      timestamp: new Date(item.timestamp).toLocaleDateString(),
      value: null
    };
  });
  return (
    <div>
      <LineChart width={1000} height={300} data={filteredData}>
        <Line
          type="monotone"
          dataKey="original_value"
          dot={false}
          stroke="blue"
        />
        <Line type="monotone" dataKey="value" stroke="red" dot={false} />
        <Line
          type="monotone"
          dataKey="forecasted_value"
          dot={false}
          stroke="blue"
          strokeDasharray="10 10"
        />
        <Line type="monotone" dataKey="min_band" dot={false} stroke="gray"/>
        <Line type="monotone" dataKey="max_band" dot={false} stroke="gray" />
        <Legend verticalAlign="top" height={36}/>
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
}
