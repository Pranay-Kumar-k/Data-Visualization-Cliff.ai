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

export default function ChartItem({data,id,metrics}) {
  const curr_metric = metrics.filter(e => e.id === id)
  console.log(data.data,id,metrics,curr_metric)
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
        original_value:item.original_value*1.5,
        anomaly: item.original_value*1.5
      };
    }
    return {
      ...item,
      timestamp: new Date(item.timestamp).toLocaleDateString(),
      anomaly: null
    };
  });
  return (
    <div style={{display:"flex", flexDirection:"column",alignItems:"center"}}>
      <div style={{height:80,padding:10,textAlign:"center",border:"2px solid whitesmoke",borderRadius:"5px",marginTop:20}}>
        {curr_metric && curr_metric[0].dimensions.map(e => {
          return(
            <>
            <p style={{float:"left",display: "inline-block",
              padding: "0 25px",
              height: "50px",
              fontSize: "16px",
              lineHeight: "50px",
              borderRadius:"25px",
              marginRight:10,
              backgroundColor: "#f1f1f1"}}>{`${e.name} : ${e.value}`}</p>
            </>
          )
        })}
      </div>
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
    </div>
  );
}
