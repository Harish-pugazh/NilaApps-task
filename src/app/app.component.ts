import { Component } from '@angular/core';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { AssessmentProgressComponent } from './assessment-progress/assessment-progress.component';
import { StudentsAttendanceComponent } from './students-attendance/students-attendance.component';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    CourseDetailsComponent,
    AssessmentProgressComponent,
    StudentsAttendanceComponent
  ],
  providers: [provideCharts(withDefaultRegisterables())]
})
export class AppComponent {}
