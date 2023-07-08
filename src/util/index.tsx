import { ToastOptions, toast } from 'react-toastify';

const toastProps: ToastOptions = {
  position: 'top-center',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
};
export const notify = ({
  message,
  type,
}: {
  message: string;
  type: 'error' | 'success';
}) =>
  type === 'success'
    ? toast.success(message, { ...toastProps })
    : toast.error(message, { ...toastProps });
