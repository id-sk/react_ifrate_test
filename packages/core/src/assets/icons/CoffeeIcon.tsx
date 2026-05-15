import React from 'react';

export interface CoffeeIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CoffeeIcon = ({ size, ...props }: CoffeeIconProps) => {
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
        d="M18.2292 3.125H5.20833C4.0625 3.125 3.125 4.0625 3.125 5.20833V11.1562C3.125 15.1458 6.19792 18.6354 10.1875 18.75C14.3125 18.875 17.7083 15.5625 17.7083 11.4583V10.4167H18.2292C20.2396 10.4167 21.875 8.78125 21.875 6.77083C21.875 4.76042 20.2396 3.125 18.2292 3.125ZM15.625 5.20833V8.33333H5.20833V5.20833H15.625ZM18.2292 8.33333H17.7083V5.20833H18.2292C19.0937 5.20833 19.7917 5.90625 19.7917 6.77083C19.7917 7.63542 19.0937 8.33333 18.2292 8.33333ZM3.125 19.7917H19.7917V21.875H3.125V19.7917Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CoffeeIcon;
