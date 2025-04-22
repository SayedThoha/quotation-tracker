import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RfqService } from '../../service/rfq.service';
import { UserService } from '../../service/user.service';
import { IRfq } from '../../model/Rfq';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-open-rfq',
  imports: [DatePipe],
  templateUrl: './open-rfq.component.html',
  styleUrl: './open-rfq.component.css',
})
export class OpenRfqComponent {
  currentRfqId: number = 0;
  rfqService = inject(RfqService);
  userService = inject(UserService);
  rfqDetails: any;
  quoteList: any[]=[];
  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((res: any) => {
      this.currentRfqId = res.id;
      this.getRfqDetails()
      this.getQuotes()
    });
  }

  getRfqDetails() {
    this.rfqService.getRfqById(this.currentRfqId).subscribe((res) => {
      this.rfqDetails = res;
    });
  }

  getQuotes() {
    this.rfqService.getAllQuotesByRfqId(this.currentRfqId).subscribe((res) => {
      this.quoteList = res;
    });
  }
}
