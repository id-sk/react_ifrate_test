import React from 'react';

export interface GolfCourseIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const GolfCourseIcon = ({ size, ...props }: GolfCourseIconProps) => {
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
      
<path d="M19.7916 21.8752C20.6545 21.8752 21.3541 21.1756 21.3541 20.3127C21.3541 19.4497 20.6545 18.7502 19.7916 18.7502C18.9286 18.7502 18.2291 19.4497 18.2291 20.3127C18.2291 21.1756 18.9286 21.8752 19.7916 21.8752Z" fill="currentColor"/>
<path d="M17.1874 6.16683L8.85409 2.0835V20.8335H6.77075V19.0314C4.90617 19.396 3.64575 20.0627 3.64575 20.8335C3.64575 21.9793 6.44784 22.9168 9.89575 22.9168C13.3437 22.9168 16.1458 21.9793 16.1458 20.8335C16.1458 19.8022 13.8958 18.9481 10.9374 18.7814V9.35433L17.1874 6.16683Z" fill="currentColor"/>
    </svg>
  );
};

export default GolfCourseIcon;
