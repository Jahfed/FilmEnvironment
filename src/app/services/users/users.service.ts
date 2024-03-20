import { Injectable } from '@angular/core';
import { User } from '../../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userList: User[] = [{
    id: 1,
    username: "jahfed",
    email: "jahfed@icloud.com",
    password: "nothashed",
    avatar: "../images/avatar.jpg",
    crewId: 3,
    productions: [2, 4],
    producerlevel: true
  }]


  getAllUsers() {
    return this.userList;
  }

  verifyUser(username: string, password: string) {
    if (username && password) {
      this.userList.filter(user => { return (user.username === username && user.password === password) })
    }
  }
}
