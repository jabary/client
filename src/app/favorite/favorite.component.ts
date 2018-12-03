import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent  {

@Input() isFavorite: boolean;
@Output() change = new EventEmitter();

onClick(){
  console.log("button is clicked");
  this.isFavorite = !this.isFavorite;
  this.change.emit(this.isFavorite);
}
  

}
