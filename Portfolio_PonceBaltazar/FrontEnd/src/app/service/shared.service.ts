import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private toggleSubject = new Subject<string>(); // Pass a string to specify the target
  toggle$ = this.toggleSubject.asObservable();

  triggerToggle(target: string) {
    this.toggleSubject.next(target); // Emit the target identifier
  }
}
