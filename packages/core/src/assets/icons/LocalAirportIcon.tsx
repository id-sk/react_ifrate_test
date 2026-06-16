import React from 'react';

export interface LocalAirportIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LocalAirportIcon = ({ size, ...props }: LocalAirportIconProps) => {
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
      
<path d="M22.9166 16.6668V14.5835L14.0624 9.37516V3.646C14.0624 2.78141 13.3645 2.0835 12.4999 2.0835C11.6353 2.0835 10.9374 2.78141 10.9374 3.646V9.37516L2.08325 14.5835V16.6668L10.9374 14.0627V19.7918L8.33325 21.3543V22.9168L12.4999 21.8752L16.6666 22.9168V21.3543L14.0624 19.7918V14.0627L22.9166 16.6668Z" fill="currentColor"/>
    </svg>
  );
};

export default LocalAirportIcon;
