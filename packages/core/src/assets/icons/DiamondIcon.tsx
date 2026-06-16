import React from 'react';

export interface DiamondIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DiamondIcon = ({ size, ...props }: DiamondIconProps) => {
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
      
<path d="M12.6667 3.59375H12.3334L9.59383 9.0625H15.4063L12.6667 3.59375Z" fill="currentColor"/>
<path d="M17.1459 9.0625H22.5209L19.7917 3.59375H14.4167L17.1459 9.0625Z" fill="currentColor"/>
<path d="M22.2709 10.625H13.2813V21.4062L22.2709 10.625Z" fill="currentColor"/>
<path d="M11.7188 21.4062V10.625H2.72925L11.7188 21.4062Z" fill="currentColor"/>
<path d="M7.85425 9.0625L10.5834 3.59375H5.20841L2.47925 9.0625H7.85425Z" fill="currentColor"/>
    </svg>
  );
};

export default DiamondIcon;
