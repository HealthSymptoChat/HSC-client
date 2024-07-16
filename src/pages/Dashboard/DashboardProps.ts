interface DashboardProps {
  totalUser: number;
  revenue: number;
  payment: Payment[];
  registeredUser: number;
  numberOfOrderInMonth: Array<{
    name: string;
    data: number[];
  }>;
}

interface Payment {
  _id: string;
  orderCode: string;
  userId: {
    _id: string;
    username: string;
    expirePackages: Date;
  };
  package_id: {
    _id: string;
    packageName: string;
    description: string;
  };
  paymentDate: Date;
  amount: number;
  status: boolean;
}

export default DashboardProps;
