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
        original_value:item.original_value*2,
        anomaly: item.original_value*2
      };
    }
    return {
      ...item,
      timestamp: new Date(item.timestamp).toLocaleDateString(),
      anomaly: null
    };
  });
  return (
    <div>
      <LineChart width={3000} height={300} data={filteredData}>
        <Line
          type="monotone"
          dataKey="original_value"
          dot={false}
          stroke="blue"
        />
        <Line type="monotone" dataKey="anomaly" stroke="red" dot={false}/>
        <Line
          type="monotone"
          dataKey="forecasted_value"
          dot={false}
          stroke="blue"
          strokeDasharray="3 3"
        />
        <Line type="monotone" dataKey="min_band" dot={false} stroke="gray" />
        <Line type="monotone" dataKey="max_band" dot={false} stroke="gray" />
        <Legend verticalAlign="top" height={36}/>
        <XAxis dataKey="timestamp" />
        <YAxis type="number" domain={[0, 'auto']}/>
        <Tooltip />
      </LineChart>
    </div>
  );
}
