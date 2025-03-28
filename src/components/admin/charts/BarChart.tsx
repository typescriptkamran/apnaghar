"use client";

import { useEffect, useRef } from "react";

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth?: number;
  }[];
}

interface BarChartProps {
  data: ChartData;
}

export function BarChart({ data }: BarChartProps) {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<any>(null);

  useEffect(() => {
    // This is a placeholder for Chart.js implementation
    // In a real implementation, you would use Chart.js to render the chart
    const renderChart = () => {
      if (!chartRef.current) return;

      const ctx = chartRef.current.getContext("2d");
      if (!ctx) return;

      // Clear previous chart
      ctx.clearRect(0, 0, chartRef.current.width, chartRef.current.height);

      // Set dimensions
      const width = chartRef.current.width;
      const height = chartRef.current.height;
      const barWidth = width / (data.labels.length * 2);
      const maxValue = Math.max(...data.datasets[0].data) * 1.1;

      // Draw axes
      ctx.beginPath();
      ctx.moveTo(40, 20);
      ctx.lineTo(40, height - 40);
      ctx.lineTo(width - 20, height - 40);
      ctx.strokeStyle = "#ccc";
      ctx.stroke();

      // Draw bars
      data.datasets[0].data.forEach((value, index) => {
        const x = 60 + index * (barWidth * 2);
        const barHeight = ((height - 60) * value) / maxValue;
        const y = height - 40 - barHeight;

        ctx.fillStyle = data.datasets[0].backgroundColor;
        ctx.fillRect(x, y, barWidth, barHeight);

        // Draw label
        ctx.fillStyle = "#888";
        ctx.font = "10px Arial";
        ctx.textAlign = "center";
        ctx.fillText(data.labels[index], x + barWidth / 2, height - 25);

        // Draw value
        ctx.fillStyle = "#333";
        ctx.fillText(value.toString(), x + barWidth / 2, y - 5);
      });

      // Draw title
      ctx.fillStyle = "#333";
      ctx.font = "12px Arial";
      ctx.textAlign = "left";
      ctx.fillText(data.datasets[0].label, 50, 30);
    };

    renderChart();

    // Handle resize
    const handleResize = () => {
      if (chartRef.current) {
        chartRef.current.width = chartRef.current.parentElement?.clientWidth || 300;
        chartRef.current.height = chartRef.current.parentElement?.clientHeight || 200;
        renderChart();
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (chartInstance.current) {
        // Clean up chart instance if using Chart.js
      }
    };
  }, [data]);

  return (
    <div className="h-full w-full">
      <canvas ref={chartRef} className="h-full w-full"></canvas>
    </div>
  );
}
