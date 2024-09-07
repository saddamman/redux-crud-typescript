import { toast, ToastBar, Toaster } from 'react-hot-toast';

const DismissableToast = () => {
  return (
    <Toaster reverseOrder={false} position="top-center">
      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <>
              {icon}
              {message}
              {t.type !== 'loading' && (
                <button onClick={() => toast.dismiss(t.id)}>X</button>
              )}
            </>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
};

export default DismissableToast;
