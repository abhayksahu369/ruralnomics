import { BarChart3, Users, Sprout, Tractor, Search, Printer, Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function Dashboard() {
  const [activeProduct, setActiveProduct] = useState('runofresh');

  const products = {
    runofresh: {
      name: 'RunoFresh',
      stats: [
        { name: 'Total Orders', value: '2,345', change: '+12%', icon: BarChart3 },
        { name: 'Active Users', value: '1,234', change: '+25%', icon: Users },
        { name: 'Products Listed', value: '456', change: '+8%', icon: Sprout },
        { name: 'Delivery Success', value: '98%', change: '+2%', icon: Tractor },
      ],
      description: 'B2B and B2C fresh produce management platform',
      monthlyData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        orders: [1200, 1400, 1600, 1800, 2100, 2345],
        revenue: [12000, 14500, 16800, 19200, 21500, 23450],
      },
      productCategories: {
        labels: ['Vegetables', 'Fruits', 'Grains', 'Dairy', 'Others'],
        data: [35, 25, 20, 15, 5],
      },
    },
    runoagri: {
      name: 'RunoAgri',
      stats: [
        { name: 'Active Farms', value: '1,567', change: '+15%', icon: BarChart3 },
        { name: 'Farmers', value: '3,456', change: '+18%', icon: Users },
        { name: 'Crop Types', value: '89', change: '+5%', icon: Sprout },
        { name: 'Yield Improvement', value: '23%', change: '+4%', icon: Tractor },
      ],
      description: 'Predictive farming and analytics platform',
      monthlyData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        farms: [1200, 1300, 1400, 1450, 1500, 1567],
        yields: [15, 17, 19, 20, 22, 23],
      },
      productCategories: {
        labels: ['Rice', 'Wheat', 'Corn', 'Vegetables', 'Others'],
        data: [30, 25, 20, 15, 10],
      },
    },
    runofarm: {
      name: 'RunoFarm',
      stats: [
        { name: 'Equipment Listed', value: '789', change: '+20%', icon: BarChart3 },
        { name: 'Active Rentals', value: '234', change: '+30%', icon: Users },
        { name: 'Service Providers', value: '123', change: '+15%', icon: Sprout },
        { name: 'Customer Rating', value: '4.8', change: '+0.2', icon: Tractor },
      ],
      description: 'Farm equipment and service marketplace',
      monthlyData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        rentals: [150, 180, 200, 210, 225, 234],
        revenue: [15000, 18000, 20000, 21000, 22500, 23400],
      },
      productCategories: {
        labels: ['Tractors', 'Harvesters', 'Sprayers', 'Tools', 'Others'],
        data: [40, 25, 15, 12, 8],
      },
    },
  };

  
  const getChartData = (product) => {
    const lineData = {
      labels: product.monthlyData.labels,
      datasets: [
        {
          label: 'Growth',
          data: product.monthlyData[Object.keys(product.monthlyData)[2]], 
          borderColor: 'rgb(34, 197, 94)',
          tension: 0.3,
        },
      ],
    };

    const barData = {
      labels: product.monthlyData.labels,
      datasets: [
        {
          label: 'Monthly Progress',
          data: product.monthlyData[Object.keys(product.monthlyData)[1]], // This assumes the second key holds monthly progress data (e.g., "orders", "farms", etc.)
          backgroundColor: 'rgba(34, 197, 94, 0.5)',
          borderColor: 'rgb(34, 197, 94)',
          borderWidth: 1,
        },
      ],
    };

    const doughnutData = {
      labels: product.productCategories.labels,
      datasets: [
        {
          data: product.productCategories.data,
          backgroundColor: [
            'rgba(34, 197, 94, 0.8)',
            'rgba(59, 130, 246, 0.8)',
            'rgba(249, 115, 22, 0.8)',
            'rgba(168, 85, 247, 0.8)',
            'rgba(236, 72, 153, 0.8)',
          ],
          borderWidth: 1,
        },
      ],
    };

    return { lineData, barData, doughnutData };
  };

  const activeProductData = products[activeProduct];
  const { lineData, barData, doughnutData } = getChartData(activeProductData);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold mb-6">Product Dashboard</h1>

          {/* Product Selector */}
          <div className="flex space-x-4 mb-8">
            {Object.entries(products).map(([key, product]) => (
              <button
                key={key}
                onClick={() => setActiveProduct(key)}
                className={`px-4 py-2 rounded-md ${
                  activeProduct === key
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {product.name}
              </button>
            ))}
          </div>

          {/* Active Product Stats */}
          <div>
            <h2 className="text-xl font-semibold mb-2">{activeProductData.name}</h2>
            <p className="text-gray-600 mb-6">{activeProductData.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {activeProductData.stats.map((stat, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <stat.icon className="h-6 w-6 text-green-600" />
                    <span className={`text-sm font-medium ${
                      stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{stat.name}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-4 shadow">
                <h3 className="text-lg font-semibold mb-4">Growth Trend</h3>
                <Line data={lineData} options={{ responsive: true }} />
              </div>
              <div className="bg-white rounded-lg p-4 shadow">
                <h3 className="text-lg font-semibold mb-4">Monthly Progress</h3>
                <Bar data={barData} options={{ responsive: true }} />
              </div>
              <div className="bg-white rounded-lg p-4 shadow">
                <h3 className="text-lg font-semibold mb-4">Distribution</h3>
                <Doughnut data={doughnutData} options={{ responsive: true }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
