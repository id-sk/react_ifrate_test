import React from 'react';

export interface CurrencyYenIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CurrencyYenIcon = ({ size, ...props }: CurrencyYenIconProps) => {
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
        d="M14.4999 11.4583H18.7499V13.5417H13.5416V15.625H18.7499V17.7083H13.5416V21.875H11.4583V17.7083H6.24992V15.625H11.4583V13.5417H6.24992V11.4583H10.4999L5.20825 3.125H7.677L12.4999 10.7187L17.3228 3.125H19.7916L14.4999 11.4583Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CurrencyYenIcon;
