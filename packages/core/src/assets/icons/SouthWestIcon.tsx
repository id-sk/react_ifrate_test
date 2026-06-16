import React from 'react';

export interface SouthWestIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SouthWestIcon = ({ size, ...props }: SouthWestIconProps) => {
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
      
<path d="M15.1042 20.3125V18.2292H8.23958L20.3125 6.15625L18.8438 4.6875L6.77083 16.7604V9.89583H4.6875V20.3125H15.1042Z" fill="currentColor"/>
    </svg>
  );
};

export default SouthWestIcon;
