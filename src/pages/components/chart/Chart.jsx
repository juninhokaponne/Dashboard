import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Janeiro", Total: 1200 },
  { name: "Fevereiro", Total: 1100 },
  { name: "Março", Total: 800 },
  { name: "Abril", Total: 1600 },
  { name: "Maio", Total: 900 },
  { name: "Junho", Total: 1700 },
  { name: "Julho", Total: 1200 },
  { name: "Agosto", Total: 2200 },
  { name: "Setembro", Total: 1300 },
  { name: "Outubro", Total: 1500 },
  { name: "Novembro", Total: 1950 },
  { name: "Dezembro", Total: 1200 },
];

export const Chart = ({ aspect, title }) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={630}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};