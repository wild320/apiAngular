import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createUserDto, User } from '../models/user.models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  private apiUrl = 'https://young-sands-07814.herokuapp.com/api/users';

  constructor(
    private http: HttpClient
  ) { }

  create(dto: createUserDto){
    return this.http.post<User[]>(this.apiUrl,dto);
  }
  getAll(){
    return this.http.get<User[]>(this.apiUrl);

  }
}
