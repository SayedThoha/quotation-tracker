export interface IRfq {
  rfqId: number;
  manufacturerId: number;
  partName: string;
  rfqName: string;
  description: string;
  quantity: number;
  dimension: string;
  requiredByDate: string;
  status: string;
  createdDate: string;
}


export interface IRfqList {
  rfqId: number
  manufacturerId: number
  userName: string
  emailId: string
  partName: string
  description: string
  quantity: number
  requiredByDate: string
  createdDate: string
}
