import React from 'react';

export interface CheckIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CheckIcon = ({ size, ...props }: CheckIconProps) => {
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
      
<path d="M9.16154 16.5365L4.81779 12.1927L3.33862 13.6615L9.16154 19.4844L21.6615 6.98437L20.1928 5.51562L9.16154 16.5365Z" fill="currentColor"/>
    </svg>
  );
};

export default CheckIcon;
