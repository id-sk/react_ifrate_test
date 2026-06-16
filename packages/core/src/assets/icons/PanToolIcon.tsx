import React from 'react';

export interface PanToolIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PanToolIcon = ({ size, ...props }: PanToolIconProps) => {
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
      
<g clipPath="url(#clip0_3230_40182)">
<path d="M23.9584 5.72917V20.8333C23.9584 23.125 22.0834 25 19.7917 25H12.1876C11.0626 25 10.0001 24.5521 9.21883 23.7604L1.04175 15.4479C1.04175 15.4479 2.35425 14.1667 2.39591 14.1458C2.62508 13.9479 2.90633 13.8437 3.21883 13.8437C3.448 13.8437 3.65633 13.9062 3.84383 14.0104C3.8855 14.0208 8.33341 16.5729 8.33341 16.5729V4.16667C8.33341 3.30208 9.03133 2.60417 9.89591 2.60417C10.7605 2.60417 11.4584 3.30208 11.4584 4.16667V11.4583H12.5001V1.5625C12.5001 0.697917 13.198 0 14.0626 0C14.9272 0 15.6251 0.697917 15.6251 1.5625V11.4583H16.6667V2.60417C16.6667 1.73958 17.3647 1.04167 18.2292 1.04167C19.0938 1.04167 19.7917 1.73958 19.7917 2.60417V11.4583H20.8334V5.72917C20.8334 4.86458 21.5313 4.16667 22.3959 4.16667C23.2605 4.16667 23.9584 4.86458 23.9584 5.72917Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_3230_40182">
<rect width="25" height="25" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
};

export default PanToolIcon;
