import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  navSubject = new Subject<string>();
  reloadHomePageProductsSubject = new Subject<boolean>();

  constructor() { }

  toggleNavigation(path: string) {
    this.navSubject.next(path);
  }

  listenNavigation(): Observable<string> {
    return this.navSubject.asObservable()
  }

  reloadHomePageProducts() {
    return this.reloadHomePageProductsSubject.next(true);
  }

  listenHomePageProductsChange() {
    return this.reloadHomePageProductsSubject.asObservable();
  }
}
