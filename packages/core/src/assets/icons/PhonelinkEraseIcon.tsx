import React from 'react';

export interface PhonelinkEraseIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PhonelinkEraseIcon = ({ size, ...props }: PhonelinkEraseIconProps) => {
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
      
<path d="M13.5417 8.54175L12.5 7.50008L8.33333 11.6667L4.16667 7.50008L3.125 8.54175L7.29167 12.7084L3.125 16.8751L4.16667 17.9167L8.33333 13.7501L12.5 17.9167L13.5417 16.8751L9.375 12.7084L13.5417 8.54175ZM19.7917 1.04175H9.375C8.22917 1.04175 7.29167 1.97925 7.29167 3.12508V6.25008H9.375V4.16675H19.7917V20.8334H9.375V18.7501H7.29167V21.8751C7.29167 23.0209 8.22917 23.9584 9.375 23.9584H19.7917C20.9375 23.9584 21.875 23.0209 21.875 21.8751V3.12508C21.875 1.97925 20.9375 1.04175 19.7917 1.04175Z" fill="currentColor"/>
    </svg>
  );
};

export default PhonelinkEraseIcon;
