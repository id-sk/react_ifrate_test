import React from 'react';

export interface CurrencyYuanIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CurrencyYuanIcon = ({ size, ...props }: CurrencyYuanIconProps) => {
  return (
    <svg
      width={size || "1em"}
      height={size || "1em"}
      viewBox="0 0 25 25"
      fill="none"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      
<path d="M13.8333 12.5H18.7499V14.5833H13.5416V21.875H11.4583V14.5833H6.24992V12.5H11.1666L5.20825 3.125H7.677L12.4999 10.7187L17.3228 3.125H19.7916L13.8333 12.5Z" fill="currentColor"/>
    </svg>
  );
};

export default CurrencyYuanIcon;
