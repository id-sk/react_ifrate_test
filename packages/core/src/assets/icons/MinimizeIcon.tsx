import React from 'react';

export interface MinimizeIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MinimizeIcon = ({ size, ...props }: MinimizeIconProps) => {
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
      
<path d="M6.25 11.4584H18.75V13.5417H6.25V11.4584Z" fill="currentColor"/>
    </svg>
  );
};

export default MinimizeIcon;
