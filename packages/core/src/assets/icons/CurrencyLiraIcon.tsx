import React from 'react';

export interface CurrencyLiraIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CurrencyLiraIcon = ({ size, ...props }: CurrencyLiraIconProps) => {
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
        d="M9.375 9.125V3.125H11.4583V7.82292L15.625 5.20833V7.66667L11.4583 10.2812L11.4688 12.7292L15.625 10.125V12.5833L11.4583 15.1979V19.7917C14.3333 19.7917 16.6667 17.4583 16.6667 14.5833H18.75C18.75 18.6146 15.4896 21.875 11.4583 21.875H9.375V16.5L6.25 18.4583V16L9.375 14.0417V11.5833L6.25 13.5417V11.0833L9.375 9.125Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CurrencyLiraIcon;
