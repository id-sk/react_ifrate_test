import React from 'react';

export interface HouseIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const HouseIcon = ({ size, ...props }: HouseIconProps) => {
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
      
<path d="M19.7916 10.2085V4.68766H16.6666V7.396L12.4999 3.646L2.08325 13.021H5.20825V21.3543H10.4166V15.1043H14.5833V21.3543H19.7916V13.021H22.9166L19.7916 10.2085ZM10.4166 10.9377C10.4166 9.79183 11.3541 8.85433 12.4999 8.85433C13.6458 8.85433 14.5833 9.79183 14.5833 10.9377H10.4166Z" fill="currentColor"/>
    </svg>
  );
};

export default HouseIcon;
