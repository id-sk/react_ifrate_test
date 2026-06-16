import React from 'react';

export interface DoneIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DoneIcon = ({ size, ...props }: DoneIconProps) => {
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
      
<path d="M9.16658 16.5625L4.79159 12.1875L3.33325 13.6458L9.16658 19.4791L21.6666 6.97915L20.2083 5.52081L9.16658 16.5625Z" fill="currentColor"/>
    </svg>
  );
};

export default DoneIcon;
