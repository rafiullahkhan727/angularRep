import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EmployeeMasterComponent } from "./employee-master/employee-master.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_18_angular';
}
