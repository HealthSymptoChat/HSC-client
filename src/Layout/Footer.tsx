const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-600">
          &copy; {new Date().getFullYear()} HealthSympToChat. Đã đăng ký Bản
          quyền.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
