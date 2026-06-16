import React from 'react';

export interface ArrowBackIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ArrowBackIcon = ({ size, ...props }: ArrowBackIconProps) => {
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
      
<path d="M20.8334 11.4582H8.15633L13.9792 5.63525L12.5001 4.1665L4.16675 12.4998L12.5001 20.8332L13.9688 19.3644L8.15633 13.5415H20.8334V11.4582Z" fill="currentColor"/>
    </svg>
  );
};

export default ArrowBackIcon;
