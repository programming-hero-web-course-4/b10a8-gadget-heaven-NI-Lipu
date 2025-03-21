
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const colors = ['#9538e2'];

  const chartData = {
    series: [
      {
        name: "Price",
        data: [1199, 1299, 1999, 1099, 1399, 249, 1499, 899, 1199, 199],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
      },
      colors: colors,
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: false,
        },
      },
      dataLabels: {
        formatter: function (value) {
          return `$${value}`; // Display price with dollar sign
        },
        style: {
          fontSize: "0px",
          colors: ["#9538e2"], // Change text color if needed
        },
      },
      tooltip: {
        y: {
          formatter: function (value) {
            return `$${value}`; // Show dollar sign in tooltip
          },
        },
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [
          "Samsung S23 Ultra",
          "Dell XPS 15",
          "MacBook Pro 14",
          "iPhone 14 Pro",
          "Lenovo ThinkPad",
          "AirPods Pro 2",
          "ASUS ROG Strix G15",
          "Acer Swift 3",
          "HP Spectre x360",
          "Samsung Buds 2 Pro"
        ],
        labels: {
          style: {
            colors: colors,
            fontSize: "12px",
          },
        },
      },
    },
  };

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />
      </div>
    </div>
  );
};

export default ApexChart;
