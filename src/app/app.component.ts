import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  post = {
    title: "post title",
    isFavorite: true
  }

  favoriteChange(isFavorite){
    console.log("Favorite changed" + isFavorite );
  }
}
