import React from 'react';

export interface LoginIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LoginIcon = ({ size, ...props }: LoginIconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.4583 7.29167L9.99992 8.75L12.7083 11.4583H2.08325V13.5417H12.7083L9.99992 16.25L11.4583 17.7083L16.6666 12.5L11.4583 7.29167ZM20.8333 19.7917H12.4999V21.875H20.8333C21.9791 21.875 22.9166 20.9375 22.9166 19.7917V5.20833C22.9166 4.0625 21.9791 3.125 20.8333 3.125H12.4999V5.20833H20.8333V19.7917Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default LoginIcon;
