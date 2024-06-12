import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { authAxios } from "@/services/axios";
import { useEffect, useState } from "react";

interface Packages {
  description: string;
  _id: string;
  packageName: string;
  features: string[];
  price: number;
  status: string;
}

const ProductList = () => {
  useEffect(() => {

    getpackages();

  }, []);
  const [packages, setPackages] = useState<Packages[] | undefined>();

  async function getpackages() {
    try {
      const response = await authAxios.get("/package/getAllPackages");
      if (response.data.message === "success") {
        setPackages(response.data.data)
      }
      else {
        setPackages([]);
      }
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Danh sách gói</h1>
      <div className=" space-around grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages?.length === 0 && (
          <div>
            <h1 className="text-3xl">
              Chưa có gói trong hệ thống
            </h1>
          </div>
        )}
        {packages?.map((pkg) => (
          <Card
            key={pkg._id}
            className="mx-5"
          >
            <CardHeader>
              <CardTitle>{pkg.packageName}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div>
                  <span className="font-medium">Details:</span>
                  <ul className="list-disc pl-2">
                    {pkg.features.map((line, index) => (
                      <li key={index}>{line}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="font-medium">Price:</span> {pkg.price} VND
                </div>
                <div>
                  <span className="font-medium">Status:</span>{" "}
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${pkg.status === "active"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      : pkg.status === "inactive"
                        ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                        : "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200" // Add the gray color for "Coming Soon"
                      }`}
                  >
                    {pkg.status}
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
