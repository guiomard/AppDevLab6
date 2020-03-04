import { Component, OnInit } from '@angular/core';
import { DataService} from '../services/data.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  studentData:any=[];
  weatherData:any=[];
  test:string;

  constructor(private service:DataService) { }

  ngOnInit():void{
    this.service.GetStudentData().subscribe(
      (data)=>{
        this.studentData=data.students;
        this.test=this.studentData[0].name;
        console.log(this.studentData);
      }
    );
    this.service.GetWeatherData().subscribe(
      (data)=>{
        this.weatherData=data.weather;
        console.log(this.weatherData);
      }
    );
  }

}
