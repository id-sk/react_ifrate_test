import React from 'react';

export interface DoneAllIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DoneAllIcon = ({ size, ...props }: DoneAllIconProps) => {
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
      
<path d="M18.7135 6.98437L17.2448 5.51562L10.6406 12.1198L12.1094 13.5885L18.7135 6.98437ZM23.1302 5.51562L12.1094 16.5365L7.75521 12.1927L6.28646 13.6615L12.1094 19.4844L24.6094 6.98437L23.1302 5.51562ZM0.390625 13.6615L6.21354 19.4844L7.68229 18.0156L1.86979 12.1927L0.390625 13.6615Z" fill="currentColor"/>
    </svg>
  );
};

export default DoneAllIcon;
