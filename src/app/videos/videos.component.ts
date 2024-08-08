import { Component } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';


@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [ProfileComponent],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent {

}
