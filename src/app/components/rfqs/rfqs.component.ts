import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
  viewChild,
} from '@angular/core';
import { RfqService } from '../../service/rfq.service';
import { IQuotes, IRfqList } from '../../model/Rfq';
import { DatePipe } from '@angular/common';
import { UserService } from '../../service/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rfqs',
  imports: [DatePipe, FormsModule],
  templateUrl: './rfqs.component.html',
  styleUrl: './rfqs.component.css',
})
export class RfqsComponent implements OnInit {
  rfqService = inject(RfqService);
  userService = inject(UserService);
  rfqList: IRfqList[] = [];

  quoteObj: IQuotes = {
    quoteId: 0,
    rfqId: 0,
    supplierId: 0,
    quotedPrice: 0,
    estimatedDeliveryDate: '',
    additionalNotes: '',
    createdDate: new Date(),
  };

  @ViewChild('rfqQuoteModal') quotesModal!: ElementRef;

  // currentRfqId: number = 0;

  ngOnInit(): void {
    this.getAllRfqs();
  }

  getAllRfqs() {
    this.rfqService.getRfqs().subscribe((res) => {
      this.rfqList = res;
    });
  }

  openQuotesModal(rfqId: number) {
    if (this.userService.loggedUserData) {
      this.quoteObj.rfqId = rfqId;
      this.quoteObj.supplierId = this.userService.loggedUserData?.userId;
      if (this.quotesModal) {
        this.quotesModal.nativeElement.style.display = 'block';
      }
    } else {
      alert('please login');
    }
  }

  closeModal() {
    if (this.quotesModal) {
      this.quotesModal.nativeElement.style.display = 'none';
    }
  }

  onSendQuotes() {
    this.rfqService.addQuote(this.quoteObj).subscribe(
      (res) => {
        alert('quotes recieved by customer');
      },
      (error) => {
        alert(error.error.message);
      }
    );
  }
}
