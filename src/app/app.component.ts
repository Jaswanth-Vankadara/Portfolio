import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { filter, map, of } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pwrouting';
  
  ngOnInit(){
    let obs= of(10,20,30,40,50,60).pipe(
      map(
        (data)=>{
          return data*2
        }
      )
    )
    
   obs.subscribe( (data)=> { console.log(data)} )

   this.showTime() 
   setInterval(this.showTime, 1000);
  
  }

   showTime(): void {
    const currentTimeElement = document.getElementById('currentTime');
    
    if (currentTimeElement) {
        currentTimeElement.innerHTML = new Date().toUTCString();
    } else {
        console.error('Element with ID "currentTime" not found.');
    }
}


  
}
