import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Product {
  id: number;
  name: string;
  details: string;
  price: string;
  status: "In Stock" | "Out of Stock" | "Coming Soon";
}

const ProductList = () => {
  const products = [
    // {
    //   id: 1,
    //   name: "Gói Miễn Phí",
    //   details: "Sử dụng các chức năng cơ bản \n Sử dụng bot chat mức độ cơ bản ",
    //   price: "Miễn Phí",
    //   status: "In Stock",
    // },
    {
      id: 1,
      name: "Gói Thành Viên",
      details: "Có những đặc quyền của gói \n Các chức năng của gói miễn phí ",
      price: "40.000 VND",
      status: "In Stock",
    },
    {
      id: 2,
      name: "Gói Chuyên Gia",
      details: "Có những đặc quyền của gói chuyên gia  \n Các chức năng của gói miễn phí \n Các chức năng của gói thành viên ",
      price: "99 000 VND",
      status: "In Stock",
    },
    // {
    //   id: 3,
    //   name: "Sắp ra mắt",
    //   details: "Sẽ ra mắt trong thời gian tới",
    //   price: "Đang cập nhật",
    //   status: "Coming Soon",
    // },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Danh sách gói</h1>
      <div className=" space-around grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card
            key={product.id}
            className={`${product.id === 1 ? "mr-6" : ""
              } ${product.id === 2 ? "ml-6" : ""}`}
          >
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div>
                  <span className="font-medium">Details:</span>
                  <ul className="list-disc pl-2">
                    {product.details.split("\n").map((line, index) => (
                      <li key={index}>{line}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="font-medium">Price:</span> {product.price}
                </div>
                <div>
                  <span className="font-medium">Status:</span>{" "}
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${product.status === "In Stock"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      : product.status === "Out of Stock"
                        ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                        : "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200" // Add the gray color for "Coming Soon"
                      }`}
                  >
                    {product.status}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
