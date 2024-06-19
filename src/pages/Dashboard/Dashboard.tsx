"use client";
import CardDataStats from "@/components/CardDataStats";
import Chart from "@/components/Chart";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { authAxios } from "@/services/axios";
import React, { useEffect, useState } from "react";

import { IoIosTrendingUp, IoLogoDropbox, IoMdPerson } from "react-icons/io";
import DashboardProps from "./DashboardProps";

// const invoices = [
//   {
//     invoice: "INV001",
//     paymentStatus: "Paid",
//     totalAmount: "250.00",
//     paymentMethod: "Credit Card",
//   },
//   {
//     invoice: "INV002",
//     paymentStatus: "Pending",
//     totalAmount: "$150.00",
//     paymentMethod: "PayPal",
//   },
//   {
//     invoice: "INV003",
//     paymentStatus: "Unpaid",
//     totalAmount: "$350.00",
//     paymentMethod: "Bank Transfer",
//   },
//   {
//     invoice: "INV004",
//     paymentStatus: "Paid",
//     totalAmount: "$450.00",
//     paymentMethod: "Credit Card",
//   },
//   {
//     invoice: "INV005",
//     paymentStatus: "Paid",
//     totalAmount: "$550.00",
//     paymentMethod: "PayPal",
//   },
//   {
//     invoice: "INV006",
//     paymentStatus: "Pending",
//     totalAmount: "$200.00",
//     paymentMethod: "Bank Transfer",
//   },
//   {
//     invoice: "INV007",
//     paymentStatus: "Unpaid",
//     totalAmount: "$300.00",
//     paymentMethod: "Credit Card",
//   },
// ];

const Dashboard: React.FC = () => {
  const [dashboard, setDashboard] = useState<DashboardProps>({
    totalUser: 0,
    revenue: 0,
    payment: [],
    registeredUser: 0,
  });

  const getDashboard = async () => {
    try {
      const response = await authAxios.get("/dashboard");
      if (response.data.message === "success") {
        const { totalUser, revenue, payment, registeredUser } =
          response.data.data;
        console.log(totalUser, revenue, payment, registeredUser);
        setDashboard({ totalUser, revenue, payment, registeredUser });
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDashboard();
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
        {/* <div>
          <CardDataStats
            title="Total views"
            total="3.456K"
            currency="VND"
            levelUp
          >
            <IoIosEye
              className="size-10 fill-primary dark:fill-white"
              width="100"
              height="100"
            />
          </CardDataStats>
        </div> */}
        <CardDataStats
          title="Doanh thu"
          total={dashboard.revenue.toString()}
          currency="VND"
          levelUp
        >
          <IoLogoDropbox
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
          <IoMdPerson
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
          <IoIosTrendingUp
            className="size-10 fill-primary dark:fill-white"
            width="100"
            height="100"
          />
        </CardDataStats>
      </div>

      <div className="flex-auto flex-col ">
        <div className="whitespace-nowrap font-semibold text-lg mt-5 mb-5">
          <Chart />
        </div>
      </div>

      <div className="flex-auto flex-col ">
        <div className="whitespace-nowrap font-semibold text-lg mt-5 mb-5">
          {" "}
          {/* Remove TableCaption and use a div with the appropriate classes */}
          Lịch sử giao dịch
        </div>
        <div className="w-full bg-white mt-3 rounded-lg">
          <Table>
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
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
              {dashboard.payment?.map((invoice) => (
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
            {/* <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell>
              </TableRow>
            </TableFooter> */}
          </Table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
