"use client";

import { useState } from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ROICalculatorProps {
  baseHours: string;
  newHours: string;
  hourlyRate: string;
}

export function ROICalculator({
  baseHours,
  newHours,
  hourlyRate,
}: ROICalculatorProps) {
  const [numReports, setNumReports] = useState(200);
  const [inputValue, setInputValue] = useState("200");

  const base = parseFloat(baseHours);
  const updated = parseFloat(newHours);
  const rate = parseFloat(hourlyRate);
  const hoursSavedPerReport = base - updated;
  const totalHoursSaved = hoursSavedPerReport * numReports;
  const totalCostSaved = totalHoursSaved * rate;
  const pctReduction = Math.round(((base - updated) / base) * 100);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value;
    setInputValue(raw);
    const parsed = parseInt(raw, 10);
    if (!isNaN(parsed) && parsed >= 1 && parsed <= 10000) {
      setNumReports(parsed);
    }
  }

  function handleSliderChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = Number(e.target.value);
    setNumReports(val);
    setInputValue(String(val));
  }

  return (
    <Card className="my-8 border-primary/20 bg-card/50 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">ROI Calculator</CardTitle>
        <p className="text-sm text-muted-foreground">
          Adjust the number of reports to see the cumulative impact.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Per-report context */}
        <div className="grid grid-cols-3 gap-3 rounded-lg border bg-muted/30 p-4 text-center">
          <div>
            <p className="text-3xl font-bold text-muted-foreground line-through">
              {base}h
            </p>
            <p className="text-xs text-muted-foreground">Before</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">{updated}h</p>
            <p className="text-xs text-muted-foreground">After</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-chart-2">
              -{pctReduction}%
            </p>
            <p className="text-xs text-muted-foreground">Per Report</p>
          </div>
        </div>

        {/* Slider + input */}
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-3">
            <label
              htmlFor="num-reports-slider"
              className="text-sm font-medium text-foreground"
            >
              Number of Reports
            </label>
            <input
              type="number"
              min={1}
              max={10000}
              value={inputValue}
              onChange={handleInputChange}
              className="w-20 rounded-md border bg-background px-2 py-1 text-right text-sm font-semibold text-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label="Number of reports"
            />
          </div>
          <input
            id="num-reports-slider"
            type="range"
            min={1}
            max={1000}
            value={Math.min(numReports, 1000)}
            onChange={handleSliderChange}
            className="w-full accent-primary"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>1</span>
            <span>1,000+</span>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg border border-primary/20 bg-primary/5 p-4 text-center">
            <p className="text-4xl font-bold text-primary">
              {totalHoursSaved.toLocaleString()}h
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Total Hours Saved
            </p>
          </div>
          <div className="rounded-lg border border-chart-2/20 bg-chart-2/5 p-4 text-center">
            <p className="text-4xl font-bold text-chart-2">
              €{totalCostSaved.toLocaleString()}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Total Cost Saved
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
