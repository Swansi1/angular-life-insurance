export interface Insurance {
  id: string,
  fullName: string;
  birthDate: Date;
  email: string;
  phone: string;
  address: string;
  smoker: boolean;
  healthIssues: string;
  coverageAmount: number;
  duration: number;
  paymentMethod: string,
  gender: string;
}
