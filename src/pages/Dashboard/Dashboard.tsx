import CardDataStats from "@/components/CardDataStats";
import Chart from "@/components/Chart";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { authAxios } from "@/services/axios";
import React, { useEffect, useState } from "react";
import { FaCashRegister } from "react-icons/fa";
import { RiUserFill, RiUserFollowFill } from "react-icons/ri";

interface DashboardProps {
  totalUser: number;
  revenue: number;
  payment: Array<{
    _id: string;
    orderCode: string;
    status: boolean;
    userId: {
      username: string;
    };
    package_id: {
      packageName: string;
    };
    amount: number;
  }>;
  registeredUser: number;
  numberOfOrderInMonth: Array<{
    name: string;
    data: number[];
  }>;
}

const Dashboard: React.FC = () => {
  const [dashboard, setDashboard] = useState<DashboardProps>({
    totalUser: 0,
    revenue: 0,
    payment: [],
    registeredUser: 0,
    numberOfOrderInMonth: [],
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    getDashboard();
  }, []);

  const getDashboard = async () => {
    try {
      const response = await authAxios.get("/dashboard");
      if (response.data.message === "success") {
        const {
          totalUser,
          revenue,
          payment,
          registeredUser,
          numberOfOrderInMonth,
        } = response.data.data;
        console.log(
          totalUser,
          revenue,
          payment,
          registeredUser,
          numberOfOrderInMonth
        );
        setDashboard({
          totalUser,
          revenue,
          payment,
          registeredUser,
          numberOfOrderInMonth,
        });
        setTotalPages(Math.ceil(payment.length / 10));
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const paginatedData = dashboard.payment?.slice(
    (currentPage - 1) * 10,
    currentPage * 10
  );

  return (
    <>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
        <CardDataStats
          title="Doanh thu"
          total={dashboard.revenue.toString()}
          currency="VND"
          levelUp
        >
          <FaCashRegister
            className="size-10 fill-primary dark:fill-white"
            width="100"
            height="100"
          />
        </CardDataStats>
        <CardDataStats
          title="Tổng người dùng"
          total={dashboard.totalUser.toString()}
          currency=""
          levelUp
        >
          <RiUserFill
            className="size-10 fill-primary dark:fill-white"
            width="100"
            height="100"
          />
        </CardDataStats>
        <CardDataStats
          title="Đã đăng ký"
          total={dashboard.registeredUser.toString()}
          currency=""
          levelUp
        >
          <RiUserFollowFill
            className="size-10 fill-primary dark:fill-white"
            width="100"
            height="100"
          />
        </CardDataStats>
      </div>

      <div className="flex-auto flex-col">
        <div className="whitespace-nowrap font-semibold text-lg mt-5 mb-5">
          <Chart />
        </div>
      </div>

      <div className="flex-auto flex-col">
        <div className="whitespace-nowrap font-semibold text-lg mt-5 mb-5">
          Lịch sử giao dịch
        </div>
        <div className="w-full bg-white mt-3 rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Mã order</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead>Người mua</TableHead>
                <TableHead>Tên gói</TableHead>
                <TableHead>Số tiền</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedData?.map((invoice) => (
                <TableRow key={invoice._id}>
                  <TableCell className="font-medium">
                    {invoice.orderCode}
                  </TableCell>
                  <TableCell>
                    {invoice.status ? "Đã thanh toán" : "Đang chờ thanh toán"}
                  </TableCell>
                  <TableCell>{invoice.userId.username}</TableCell>
                  <TableCell>{invoice.package_id.packageName}</TableCell>
                  <TableCell>{invoice.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex justify-end">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => handlePageChange(currentPage - 1)}
                    // disabled={currentPage === 1}
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        onClick={() => handlePageChange(page)}
                        // active={page === currentPage}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  )
                )}
                <PaginationItem>
                  <PaginationNext
                    onClick={() => handlePageChange(currentPage + 1)}
                    // disabled={currentPage === totalPages}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
