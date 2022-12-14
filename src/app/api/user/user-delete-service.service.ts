import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserEditDeleteService {

  constructor() { }

  delete(userId: number) {
    return of(null).pipe(delay(700));
  }
}
