import React from 'react';

export interface ThumbDownAltIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ThumbDownAltIcon = ({ size, ...props }: ThumbDownAltIconProps) => {
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
      
<path d="M22.9167 3.125H20.8334C20.2605 3.125 19.7917 3.59375 19.7917 4.16667V13.5417C19.7917 14.1146 20.2605 14.5833 20.8334 14.5833H22.9167V3.125ZM2.26046 10.5417C2.14587 10.8021 2.08337 11.0833 2.08337 11.375V12.5C2.08337 13.6458 3.02087 14.5833 4.16671 14.5833H9.89587L8.93754 19.4271C8.88546 19.6562 8.91671 19.9062 9.02087 20.1146C9.26046 20.5833 9.56254 21.0104 9.93754 21.3854L10.4167 21.875L17.0938 15.1979C17.4896 14.8021 17.7084 14.2708 17.7084 13.7188V5.5625C17.7084 4.21875 16.6146 3.125 15.2709 3.125H6.83337C6.09379 3.125 5.41671 3.51042 5.04171 4.13542L2.26046 10.5417Z" fill="currentColor"/>
    </svg>
  );
};

export default ThumbDownAltIcon;
