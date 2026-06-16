import React from 'react';

export interface ArrowUpwardIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ArrowUpwardIcon = ({ size, ...props }: ArrowUpwardIconProps) => {
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
      
<path d="M4.16675 12.4998L5.6355 13.9686L11.4584 8.15609V20.8332H13.5417V8.15609L19.3542 13.979L20.8334 12.4998L12.5001 4.1665L4.16675 12.4998Z" fill="currentColor"/>
    </svg>
  );
};

export default ArrowUpwardIcon;
