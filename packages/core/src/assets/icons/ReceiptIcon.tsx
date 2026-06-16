import React from 'react';

export interface ReceiptIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ReceiptIcon = ({ size, ...props }: ReceiptIconProps) => {
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
      
<path d="M18.75 17.7084H6.25V15.625H18.75V17.7084ZM18.75 13.5417H6.25V11.4584H18.75V13.5417ZM18.75 9.37504H6.25V7.29171H18.75V9.37504ZM3.125 22.9167L4.6875 21.3542L6.25 22.9167L7.8125 21.3542L9.375 22.9167L10.9375 21.3542L12.5 22.9167L14.0625 21.3542L15.625 22.9167L17.1875 21.3542L18.75 22.9167L20.3125 21.3542L21.875 22.9167V2.08337L20.3125 3.64587L18.75 2.08337L17.1875 3.64587L15.625 2.08337L14.0625 3.64587L12.5 2.08337L10.9375 3.64587L9.375 2.08337L7.8125 3.64587L6.25 2.08337L4.6875 3.64587L3.125 2.08337V22.9167Z" fill="currentColor"/>
    </svg>
  );
};

export default ReceiptIcon;
