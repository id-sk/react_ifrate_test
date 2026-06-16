import React from 'react';

export interface StraightIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const StraightIcon = ({ size, ...props }: StraightIconProps) => {
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
      
<path d="M11.4583 7.11458L9.802 8.76042L8.33325 7.29167L12.4999 3.125L16.6666 7.29167L15.1978 8.76042L13.5416 7.11458V21.875H11.4583V7.11458Z" fill="currentColor"/>
    </svg>
  );
};

export default StraightIcon;
