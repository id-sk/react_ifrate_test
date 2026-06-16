import React from 'react';

export interface LineAxisIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LineAxisIcon = ({ size, ...props }: LineAxisIconProps) => {
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
      
<path d="M22.9166 8.26042L21.4478 6.79167L17.2499 11.5104L9.89575 4.6875L2.08325 12.5104L3.64575 14.0729L10.0416 7.66667L15.8645 13.0625L14.0624 15.0937L9.89575 10.9271L2.08325 18.75L3.64575 20.3125L9.89575 14.0521L14.0624 18.2187L17.3853 14.4792L21.4478 18.2396L22.9166 16.7708L18.7708 12.9167L22.9166 8.26042Z" fill="currentColor"/>
    </svg>
  );
};

export default LineAxisIcon;
