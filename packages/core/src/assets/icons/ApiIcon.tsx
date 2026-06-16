import React from 'react';

export interface ApiIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ApiIcon = ({ size, ...props }: ApiIconProps) => {
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
      
<path d="M14.5834 12.5L12.5001 14.5834L10.4167 12.5L12.5001 10.4167L14.5834 12.5ZM12.5001 6.25002L14.7084 8.45835L17.3126 5.85419L12.5001 1.04169L7.68758 5.85419L10.2917 8.45835L12.5001 6.25002ZM6.25008 12.5L8.45841 10.2917L5.85425 7.68752L1.04175 12.5L5.85425 17.3125L8.45841 14.7084L6.25008 12.5ZM18.7501 12.5L16.5417 14.7084L19.1459 17.3125L23.9584 12.5L19.1459 7.68752L16.5417 10.2917L18.7501 12.5ZM12.5001 18.75L10.2917 16.5417L7.68758 19.1459L12.5001 23.9584L17.3126 19.1459L14.7084 16.5417L12.5001 18.75Z" fill="currentColor"/>
    </svg>
  );
};

export default ApiIcon;
