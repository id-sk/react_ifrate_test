import React from 'react';

export interface ArrowDownwardIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ArrowDownwardIcon = ({ size, ...props }: ArrowDownwardIconProps) => {
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
      
<path d="M20.8334 12.4998L19.3647 11.0311L13.5417 16.8436V4.1665H11.4584V16.8436L5.64591 11.0207L4.16675 12.4998L12.5001 20.8332L20.8334 12.4998Z" fill="currentColor"/>
    </svg>
  );
};

export default ArrowDownwardIcon;
