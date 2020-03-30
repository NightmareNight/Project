import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class BooksService {
    Books = [];
    Price = new BehaviorSubject<number>(0);

    getCurrentPrice() {
        return this.Price.asObservable()
    }
}