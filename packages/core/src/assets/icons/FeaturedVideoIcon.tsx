import React from 'react';

export interface FeaturedVideoIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FeaturedVideoIcon = ({ size, ...props }: FeaturedVideoIconProps) => {
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
      
<path d="M21.8751 3.125H3.12508C1.97925 3.125 1.04175 4.0625 1.04175 5.20833V19.7917C1.04175 20.9375 1.97925 21.875 3.12508 21.875H21.8751C23.0209 21.875 23.9584 20.9375 23.9584 19.7917V5.20833C23.9584 4.0625 23.0209 3.125 21.8751 3.125ZM12.5001 12.5H3.12508V5.20833H12.5001V12.5Z" fill="currentColor"/>
    </svg>
  );
};

export default FeaturedVideoIcon;
