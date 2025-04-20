export class Register {
  userId: number;
  userName: string;
  emailId: string;
  fullName: string;
  password: string;
  role: string;

  constructor() {
    this.emailId = '';
    this.userId = 0;
    this.userName = '';
    this.password = '';
    this.fullName = '';
    this.password = '';
    this.role = '';
  }
}

export interface IApiResponse {
  message: string;
  result: boolean;
  data: any;
}

export class Login {
  userName: string;
  password: string;

  constructor() {
    this.userName = '';
    this.password = '';
  }
}

export interface IUserModel {
  userId: number;
  userName: string;
  emailId: string;
  fullName: string;
  role: string;
  createdDate: string;
  password: string;
  projectName: string;
  refreshToken: any;
  refreshTokenExpiryTime: any;
}
