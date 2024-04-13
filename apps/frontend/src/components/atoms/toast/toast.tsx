import { Toaster, toast } from 'sonner';
export const Toast = () => {
  return <Toaster />;
};

export function addToast(title: string, message: string) {
  toast(title, {
    description: message,
    closeButton: true,
  });
}
