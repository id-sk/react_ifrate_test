import React from 'react';

export interface SkipNextIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SkipNextIcon = ({ size, ...props }: SkipNextIconProps) => {
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
      
<path d="M6.25 18.75L15.1042 12.5L6.25 6.25V18.75ZM16.6667 6.25V18.75H18.75V6.25H16.6667Z" fill="currentColor"/>
    </svg>
  );
};

export default SkipNextIcon;
