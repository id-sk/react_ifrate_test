import React from 'react';

export interface SkipPreviousIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SkipPreviousIcon = ({ size, ...props }: SkipPreviousIconProps) => {
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
      
<path d="M6.25 6.25H8.33333V18.75H6.25V6.25ZM9.89583 12.5L18.75 18.75V6.25L9.89583 12.5Z" fill="currentColor"/>
    </svg>
  );
};

export default SkipPreviousIcon;
