"use client";

import { useEffect, useRef } from "react";

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor?: string;
    tension?: number;
  }[];
}

interface LineChartProps {
  data: ChartData;
}

export function LineChart({ data }: LineChartProps) {
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
      const maxValue = Math.max(...data.datasets[0].data) * 1.1;
      const pointGap = (width - 80) / (data.labels.length - 1);

      // Draw axes
      ctx.beginPath();
      ctx.moveTo(40, 20);
      ctx.lineTo(40, height - 40);
      ctx.lineTo(width - 20, height - 40);
      ctx.strokeStyle = "#ccc";
      ctx.stroke();

      // Draw line
      ctx.beginPath();
      data.datasets[0].data.forEach((value, index) => {
        const x = 40 + index * pointGap;
        const y = height - 40 - ((height - 60) * value) / maxValue;

        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }

        // Draw point
        ctx.fillStyle = data.datasets[0].borderColor;
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();

        // Draw label
        ctx.fillStyle = "#888";
        ctx.font = "10px Arial";
        ctx.textAlign = "center";
        ctx.fillText(data.labels[index], x, height - 25);

        // Draw value
        ctx.fillStyle = "#333";
        ctx.fillText(value.toString(), x, y - 10);
      });

      ctx.strokeStyle = data.datasets[0].borderColor;
      ctx.lineWidth = 2;
      ctx.stroke();

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
