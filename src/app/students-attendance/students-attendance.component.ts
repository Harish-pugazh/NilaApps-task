import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-students-attendance',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  providers: [provideCharts(withDefaultRegisterables())],
  templateUrl: './students-attendance.component.html',
  styleUrls: ['./students-attendance.component.css']
})
export class StudentsAttendanceComponent {
  lineChartOptions: ChartOptions = {
    responsive: true,
  };
  lineChartLabels: string[] = Array.from({ length: 13 }, (_, i) => `Week ${i + 1}`);
  lineChartType: ChartType = 'line';
  lineChartLegend = true;
  lineChartData: ChartDataset[] = [
    { data: [85, 80, 78, 90, 85, 88, 92, 95, 93, 90, 88, 85, 87], label: 'Attendance' }
  ];
}
