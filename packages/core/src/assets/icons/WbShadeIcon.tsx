import React from 'react';

export interface WbShadeIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const WbShadeIcon = ({ size, ...props }: WbShadeIconProps) => {
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
      
<path d="M14.5833 12.4998V15.104L20.3124 20.8332H22.9166L14.5833 12.4998ZM14.5833 20.8332H17.7083L14.5833 17.7082V20.8332ZM8.33325 4.1665L2.08325 10.4165H4.16659V20.8332H12.4999V10.4165H14.5833L8.33325 4.1665ZM9.37492 14.5832H7.29159V10.4165H9.37492V14.5832Z" fill="currentColor"/>
    </svg>
  );
};

export default WbShadeIcon;
