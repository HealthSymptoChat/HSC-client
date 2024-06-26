import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let toastId: any = null;

export const toastSuccess = (messages: string) => {
  if (!toast.isActive(toastId)) {
    toastId = toast.success(`${messages}`, {
      position: "bottom-left",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
};

export const toastWarning = (messages: string) => {
  if (!toast.isActive(toastId)) {
    toastId = toast.warn(`${messages}`, {
      position: "bottom-left",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
};

export const toastError = (messages: string) => {
  if (!toast.isActive(toastId)) {
    toastId = toast.error(`${messages}`, {
      position: "bottom-left",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
};

export const toastInfo = (messages: string) => {
  if (!toast.isActive(toastId)) {
    toastId = toast.info(`${messages}`, {
      position: "bottom-left",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
};

function Toast() {
  return (
    <div>
      <ToastContainer
        position="bottom-left"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      ></ToastContainer>
    </div>
  );
}

export default Toast;
