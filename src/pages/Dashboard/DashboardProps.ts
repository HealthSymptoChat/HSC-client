interface DashboardProps {
  totalUser: number;
  revenue: number;
  payment: Payment[];
}

interface Payment {
  _id: string;
  orderCode: string;
  userId: {
    _id: string;
    username: string;
  };
  package_id: {
    _id: string;
    packageName: string;
    description: string;
  };
  amount: number;
  status: boolean;
}

export default DashboardProps;
