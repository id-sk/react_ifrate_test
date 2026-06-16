import React from 'react';

export interface EastIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const EastIcon = ({ size, ...props }: EastIconProps) => {
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
      
<path d="M15.6249 5.2085L14.1562 6.67725L18.927 11.4585H2.08325V13.5418H18.927L14.1458 18.3231L15.6249 19.7918L22.9166 12.5002L15.6249 5.2085Z" fill="currentColor"/>
    </svg>
  );
};

export default EastIcon;
