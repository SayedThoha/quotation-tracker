import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RfqService } from '../../service/rfq.service';
import { IRfq } from '../../model/Rfq';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-create-rfq',
  imports: [ReactiveFormsModule],
  templateUrl: './create-rfq.component.html',
  styleUrl: './create-rfq.component.css',
})
export class CreateRfqComponent {
  rfqForm: FormGroup = new FormGroup({});
  rfqService = inject(RfqService);
  userService = inject(UserService);

  constructor() {
    this.createForm();
  }
  createForm() {
    this.rfqForm = new FormGroup({
      rfqId: new FormControl(0),
      manufacturerId: new FormControl(this.userService.loggedUserData?.userId),
      partName: new FormControl(''),
      rfqName: new FormControl(''),
      description: new FormControl(''),
      quantity: new FormControl(0),
      dimension: new FormControl(''),
      requiredByDate: new FormControl(''),
      status: new FormControl(''),
      createdDate: new FormControl(new Date()),
    });
  }

  onSaveRfq() {
    debugger;
    const formObj = this.rfqForm.value;
    this.rfqService.createRfq(formObj).subscribe(
      (result: IRfq) => {
        alert('rfq created successfully');
      },
      (error) => {}
    );
  }
}
