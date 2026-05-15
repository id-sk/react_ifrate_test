import React from 'react';

export interface CurrencyBitcoinIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CurrencyBitcoinIcon = ({ size, ...props }: CurrencyBitcoinIconProps) => {
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
        d="M17.25 12.0521C17.8645 11.3333 18.2291 10.3958 18.2291 9.375C18.2291 7.4375 16.9062 5.80208 15.1041 5.34375V3.125H13.0208V5.20833H10.9375V3.125H8.85413V5.20833H5.72913V7.29167H7.81246V17.7083H5.72913V19.7917H8.85413V21.875H10.9375V19.7917H13.0208V21.875H15.1041V19.7917C17.4062 19.7917 19.2708 17.9271 19.2708 15.625C19.2708 14.1146 18.4583 12.7812 17.25 12.0521ZM9.89579 7.29167H14.0625C15.2083 7.29167 16.1458 8.22917 16.1458 9.375C16.1458 10.5208 15.2083 11.4583 14.0625 11.4583H9.89579V7.29167ZM15.1041 17.7083H9.89579V13.5417H15.1041C16.25 13.5417 17.1875 14.4792 17.1875 15.625C17.1875 16.7708 16.25 17.7083 15.1041 17.7083Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CurrencyBitcoinIcon;
