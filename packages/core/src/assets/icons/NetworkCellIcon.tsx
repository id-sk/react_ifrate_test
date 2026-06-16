import React from 'react';

export interface NetworkCellIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const NetworkCellIcon = ({ size, ...props }: NetworkCellIconProps) => {
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
      
<path d="M2.08325 22.9166H22.9166V2.08325L2.08325 22.9166ZM20.8333 20.8333H17.7083V10.2395L20.8333 7.1145V20.8333Z" fill="currentColor"/>
    </svg>
  );
};

export default NetworkCellIcon;
