import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {
  courseDetails = {
    courseCodes: ['CS101', 'CS102', 'CS103'],
    courseName: 'Introduction to Computer Science',
    courseType: 'Core',
    coursePeriod: 'Fall 2024',
    credit: 3,
    courseOutcome: 'Understand the basics of computer science.',
    mapTo: 'CS Department'
  };
}
