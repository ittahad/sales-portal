import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  navSubject = new Subject<string>();

  constructor() { }

  toggleNavigation(path: string) {
    this.navSubject.next(path);
  }

  listenNavigation(): Observable<string> {
    return this.navSubject.asObservable()
  }
}
