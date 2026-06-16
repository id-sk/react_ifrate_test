import React from 'react';

export interface CancelPresentationIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CancelPresentationIcon = ({ size, ...props }: CancelPresentationIconProps) => {
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
      
<path d="M21.8751 19.8958H3.12508V5.20833H21.8751V19.8958ZM21.8751 3.125H3.12508C1.97925 3.125 1.04175 4.0625 1.04175 5.20833V19.7917C1.04175 20.9375 1.97925 21.875 3.12508 21.875H21.8751C23.0209 21.875 23.9584 20.9375 23.9584 19.7917V5.20833C23.9584 4.0625 23.0209 3.125 21.8751 3.125Z" fill="currentColor"/>
<path d="M15.198 8.33333L12.5001 11.0312L9.80216 8.33333L8.33341 9.80208L11.0313 12.5L8.33341 15.1979L9.80216 16.6667L12.5001 13.9687L15.198 16.6667L16.6667 15.1979L13.9688 12.5L16.6667 9.80208L15.198 8.33333Z" fill="currentColor"/>
    </svg>
  );
};

export default CancelPresentationIcon;
