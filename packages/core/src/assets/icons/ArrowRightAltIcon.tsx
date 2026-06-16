import React from 'react';

export interface ArrowRightAltIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ArrowRightAltIcon = ({ size, ...props }: ArrowRightAltIconProps) => {
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
      
<path d="M16.6772 11.4583H4.16675V13.5416H16.6772V16.6666L20.8334 12.5L16.6772 8.33331V11.4583Z" fill="currentColor"/>
    </svg>
  );
};

export default ArrowRightAltIcon;
