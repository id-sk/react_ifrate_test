import React from 'react';

export interface ShopIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ShopIcon = ({ size, ...props }: ShopIconProps) => {
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
      
<path d="M16.6666 6.77079V4.68746C16.6666 3.53121 15.7395 2.60413 14.5833 2.60413H10.4166C9.26034 2.60413 8.33325 3.53121 8.33325 4.68746V6.77079H2.08325V20.3125C2.08325 21.4687 3.01034 22.3958 4.16659 22.3958H20.8333C21.9895 22.3958 22.9166 21.4687 22.9166 20.3125V6.77079H16.6666ZM10.4166 4.68746H14.5833V6.77079H10.4166V4.68746ZM9.37492 19.2708V9.89579L17.1874 14.0625L9.37492 19.2708Z" fill="currentColor"/>
    </svg>
  );
};

export default ShopIcon;
