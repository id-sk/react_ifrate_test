import React from 'react';

export interface WestIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const WestIcon = ({ size, ...props }: WestIconProps) => {
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
      
<path d="M9.37504 19.7918L10.8438 18.3231L6.07296 13.5418H22.9167V11.4585H6.07296L10.8542 6.67725L9.37504 5.2085L2.08337 12.5002L9.37504 19.7918Z" fill="currentColor"/>
    </svg>
  );
};

export default WestIcon;
