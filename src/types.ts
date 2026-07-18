export interface BoardMember {
  name: string;
  role: string;
  title: string;
  bio: string;
  category: 'executive' | 'member' | 'emeritus' | 'staff';
}

export interface Scholarship {
  id: string;
  name: string;
  category: 'general' | 'health' | 'stem' | 'humanities' | 'vocational' | 'promise';
  amount: string;
  eligibility: string[];
  description: string;
}

export interface DonationFormState {
  amount: number | '';
  frequency: 'one-time' | 'monthly' | 'annually';
  purpose: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  isAnonymous: boolean;
  isTribute: boolean;
  tributeType?: 'honor' | 'memory';
  tributeName?: string;
  employerMatch?: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  zipCode: string;
}

export interface FinancialDocument {
  name: string;
  type: 'tax-letter' | 'form-990' | 'audit' | 'report';
  year: string;
  description: string;
  url: string;
}
