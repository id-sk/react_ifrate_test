import React from 'react';

export interface StoreIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const StoreIcon = ({ size, ...props }: StoreIconProps) => {
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
      
<path d="M20.8333 4.16663H4.16667V6.24996H20.8333V4.16663ZM21.875 14.5833V12.5L20.8333 7.29163H4.16667L3.125 12.5V14.5833H4.16667V20.8333H14.5833V14.5833H18.75V20.8333H20.8333V14.5833H21.875ZM12.5 18.75H6.25V14.5833H12.5V18.75Z" fill="currentColor"/>
    </svg>
  );
};

export default StoreIcon;
