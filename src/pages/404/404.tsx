import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center gap-6 px-4 py-12 md:px-6">
      <div className="max-w-md text-center">
        <img
          src="/src/assets/404.svg"
          alt="Error 404"
          className="mx-auto h-50 w-50"
        />
        <p className="mt-4 text-gray-500 dark:text-gray-400 font-bold text-6xl">
          404
        </p>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
          Không tìm thấy trang
        </h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400">
          Xin lỗi, chúng tôi không thể tìm thấy trang bạn đang tìm kiếm.
        </p>
        <div className="mt-6">
          <Button variant="default" onClick={() => navigate("/auth/login")}>
            Quay lại trang chủ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
