import React from 'react';

export interface ReceiptLongIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ReceiptLongIcon = ({ size, ...props }: ReceiptLongIconProps) => {
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
      
<path d="M20.3125 3.646L18.75 2.0835L17.1875 3.646L15.625 2.0835L14.0625 3.646L12.5 2.0835L10.9375 3.646L9.375 2.0835L7.8125 3.646L6.25 2.0835V16.6668H3.125V19.7918C3.125 21.521 4.52083 22.9168 6.25 22.9168H18.75C20.4792 22.9168 21.875 21.521 21.875 19.7918V2.0835L20.3125 3.646ZM19.7917 19.7918C19.7917 20.3647 19.3229 20.8335 18.75 20.8335C18.1771 20.8335 17.7083 20.3647 17.7083 19.7918V16.6668H8.33333V5.2085H19.7917V19.7918Z" fill="currentColor"/>
<path d="M15.625 7.29183H9.375V9.37516H15.625V7.29183Z" fill="currentColor"/>
<path d="M18.75 7.29183H16.6667V9.37516H18.75V7.29183Z" fill="currentColor"/>
<path d="M15.625 10.4168H9.375V12.5002H15.625V10.4168Z" fill="currentColor"/>
<path d="M18.75 10.4168H16.6667V12.5002H18.75V10.4168Z" fill="currentColor"/>
    </svg>
  );
};

export default ReceiptLongIcon;
