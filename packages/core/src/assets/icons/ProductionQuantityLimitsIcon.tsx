import React from 'react';

export interface ProductionQuantityLimitsIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ProductionQuantityLimitsIcon = ({ size, ...props }: ProductionQuantityLimitsIconProps) => {
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
        d="M14.5833 10.9375H12.4999V8.85417H14.5833V10.9375ZM14.5833 6.77083H12.4999V1.5625H14.5833V6.77083ZM8.33325 19.2708C7.18742 19.2708 6.26034 20.2083 6.26034 21.3542C6.26034 22.5 7.18742 23.4375 8.33325 23.4375C9.47909 23.4375 10.4166 22.5 10.4166 21.3542C10.4166 20.2083 9.47909 19.2708 8.33325 19.2708ZM18.7499 19.2708C17.6041 19.2708 16.677 20.2083 16.677 21.3542C16.677 22.5 17.6041 23.4375 18.7499 23.4375C19.8958 23.4375 20.8333 22.5 20.8333 21.3542C20.8333 20.2083 19.8958 19.2708 18.7499 19.2708ZM9.47909 14.0625H17.2395C18.0208 14.0625 18.7083 13.6354 19.0624 12.9896L22.9166 5.6875L21.0937 4.6875L17.2395 11.9792H9.927L5.4895 2.60417H2.08325V4.6875H4.16659L7.91659 12.5938L6.51034 15.1354C5.74992 16.5312 6.74992 18.2292 8.33325 18.2292H20.8333V16.1458H8.33325L9.47909 14.0625Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ProductionQuantityLimitsIcon;
