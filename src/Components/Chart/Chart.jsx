import { Link } from "react-router";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

// 🔺 Smooth tapered pyramid shape (curved)
const CurvedPyramidBar = ({ x, y, width, height, fill }) => {
  if (x == null || y == null || width == null || height == null) return null;

  const bottomY = y + height;
  const bottomLeftX = x;
  const bottomRightX = x + width;
  const topX = x + width / 2;
  const topY = y;

  // Bezier curves for smooth sides
  const d = `
    M ${bottomLeftX},${bottomY}
    C ${bottomLeftX + width * 0.25},${bottomY - height * 0.3} 
      ${topX - width * 0.1},${topY + height * 0.2} 
      ${topX},${topY}
    C ${topX + width * 0.1},${topY + height * 0.2} 
      ${bottomRightX - width * 0.25},${bottomY - height * 0.3} 
      ${bottomRightX},${bottomY}
    Z
  `;

  return <path d={d} fill={fill} />;
};

const Chart = ({ chartData }) => {
  if (!chartData || chartData.length === 0) {
    return (
      <div className="text-center pb-10">
        <h4 className="text-3xl font-semibold">You Have Booked any appointment yet</h4>
        <p className="font-thin text-gray-500">
          Our Platform Connects with you Verified Experienced Doctors
        </p>
        <Link to={'/'}><button className="btn bg-blue-600 hover:bg-blue-500 text-gray-200 hover:text-white rounded-xl px-10 py-6 mt-6 hover:text-xl">Book Appointment</button></Link>
      </div>
    );
  }

  // 🔺 Random / distinct colors per bar
  const colors = ["#ef4444", "#facc15", "#3b82f6", "#10b981", "#f472b6", "#8b5cf6", "#f43f5e"];

  return (
    <div className="w-full bg-white p-6 pb-2 h-96 rounded-2xl">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Bar dataKey="fee" shape={<CurvedPyramidBar />} barSize={130}>
            {chartData.map((entry, idx) => (
              <Cell key={idx} fill={colors[idx % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {/* My todays appointment section */}
      <div className="text-center mt-6">
        <h3 className="mb-3 font-bold text-3xl">My Today Appointment</h3>
        <p className="font-thin text-gray-500">
          Our Platform Connects with you Verified Experienced Doctors
        </p>
      </div>
    </div>
  );
};

export default Chart;
