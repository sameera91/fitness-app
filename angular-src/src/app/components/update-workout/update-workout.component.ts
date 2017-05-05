import { Component, OnInit } from '@angular/core';
import { UpdateWorkoutService } from '../../services/update-workout.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-workout',
  templateUrl: './update-workout.component.html',
  styleUrls: ['./update-workout.component.css']
})
export class UpdateWorkoutComponent implements OnInit {

  name: String; 
  category: String; 
  calories: String; 
  notes: String;

  constructor(private UpdateWorkoutService:UpdateWorkoutService,
  private router:Router, 
  private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  	/*this.UpdateWorkoutService.UpdateWorkout(id).subscribe(data => {
  	  var workouts = this.workouts;
      if(data.n === 1){
          for(var i = 0; i < workouts.length; i++){
            if(workouts[i]._id === id){
              console.log(workouts[i]);
            }
          }
        }
    });*/
  }

  getWorkoutInfo(id){
  	console.log(id);
  }

  updateWorkout(event){
    console.log(this);
    var _workout = {
      name: this.name, 
      category: this.category, 
      calories: this.calories, 
      notes: this.notes
    }
    //console.log(_workout);
    this.UpdateWorkoutService.updateWorkout(_workout).subscribe(data => {
        
        console.log(data);

        //this.flashMessage.show('Workout has been updated', {cssClass: 'alert-success', timeout: 5000});
    });

  }

}
