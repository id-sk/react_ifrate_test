import React from 'react';

export interface FirstPageIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FirstPageIcon = ({ size, ...props }: FirstPageIconProps) => {
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
      
<path d="M18.9636 17.2812L14.1823 12.5L18.9636 7.71875L17.4948 6.25L11.2448 12.5L17.4948 18.75L18.9636 17.2812ZM6.0365 6.25H8.11983V18.75H6.0365V6.25Z" fill="currentColor"/>
    </svg>
  );
};

export default FirstPageIcon;
