import React from 'react';

export interface KeyboardReturnIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const KeyboardReturnIcon = ({ size, ...props }: KeyboardReturnIconProps) => {
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
      
<path d="M20.3126 7.29167V11.4583H6.59383L10.323 7.71875L8.85425 6.25L2.60425 12.5L8.85425 18.75L10.323 17.2812L6.59383 13.5417H22.3959V7.29167H20.3126Z" fill="currentColor"/>
    </svg>
  );
};

export default KeyboardReturnIcon;
