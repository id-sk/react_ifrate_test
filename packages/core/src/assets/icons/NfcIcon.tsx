import React from 'react';

export interface NfcIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const NfcIcon = ({ size, ...props }: NfcIconProps) => {
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
      
<path d="M20.8333 2.08325H4.16659C3.02075 2.08325 2.08325 3.02075 2.08325 4.16659V20.8333C2.08325 21.9791 3.02075 22.9166 4.16659 22.9166H20.8333C21.9791 22.9166 22.9166 21.9791 22.9166 20.8333V4.16659C22.9166 3.02075 21.9791 2.08325 20.8333 2.08325ZM20.8333 20.8333H4.16659V4.16659H20.8333V20.8333ZM18.7499 6.24992H13.5416C12.3958 6.24992 11.4583 7.18742 11.4583 8.33325V10.7083C10.8333 11.0728 10.4166 11.7291 10.4166 12.4999C10.4166 13.6458 11.3541 14.5833 12.4999 14.5833C13.6458 14.5833 14.5833 13.6458 14.5833 12.4999C14.5833 11.7291 14.1666 11.0624 13.5416 10.7083V8.33325H16.6666V16.6666H8.33325V8.33325H10.4166V6.24992H6.24992V18.7499H18.7499V6.24992Z" fill="currentColor"/>
    </svg>
  );
};

export default NfcIcon;
