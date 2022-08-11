import { Component } from '@angular/core';
import { UsersService } from './services/users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showImg = true;
  token = '';
  constructor(
    private usersService: UsersService,
  ) {
  }

  onLoaded(img: string) {
    console.log("Log padre", img);

  }
  toogleImg() {
    this.showImg = !this.showImg;
  }

  createUser() {
    this.usersService.create({
      name: 'wild',
      email: 'wild@wild.com',
      password: 'wild320'
    })
      .subscribe(rta => {
        console.log(rta);
      });
  }

}
