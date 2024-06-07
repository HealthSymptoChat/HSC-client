"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CardDataStats from "@/components/CardDataStats";
import React from "react";
import {
  IoIosEye,
  IoIosTrendingUp,
  IoLogoDropbox,
  IoMdPerson,
} from "react-icons/io";
const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const Dashboard: React.FC = () => {
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
        <CardDataStats title="Lợi nhuận" total="3.456K" currency="VND" levelUp>
          <IoIosTrendingUp
            className="size-10 fill-primary dark:fill-white"
            width="100"
            height="100"
          />
        </CardDataStats>
        <CardDataStats title="Doanh thu" total="3.456K" currency="VND" levelUp>
          <IoLogoDropbox
            className="size-10 fill-primary dark:fill-white"
            width="100"
            height="100"
          />
        </CardDataStats>
        <CardDataStats
          title="Tổng người dùng"
          total="3.456K"
          currency="VND"
          levelUp
        >
          <IoMdPerson
            className="size-10 fill-primary dark:fill-white"
            width="100"
            height="100"
          />
        </CardDataStats>
      </div>

      <div className="w-full bg-white px-4 mt-3 rounded-lg">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell className="text-right">
                  {invoice.totalAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </>
  );
};

export default Dashboard;
