import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IRfqList } from '../../model/Rfq';
import { RfqService } from '../../service/rfq.service';
import { UserService } from '../../service/user.service';
import { AsyncPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rfq-list',
  imports: [AsyncPipe,DatePipe,RouterLink],
  templateUrl: './rfq-list.component.html',
  styleUrl: './rfq-list.component.css',
})
export class RfqListComponent {
  userService = inject(UserService);
  myRfqList$: Observable<IRfqList[]> = new Observable<IRfqList[]>();

  constructor(private rfqService: RfqService) {
    if (this.userService.loggedUserData) {
      this.myRfqList$ = rfqService.getRfqByUser(
        this.userService.loggedUserData?.userId
      );
    }
  }
}
