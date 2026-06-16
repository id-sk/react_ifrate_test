import React from 'react';

export interface VpnKeyOffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const VpnKeyOffIcon = ({ size, ...props }: VpnKeyOffIconProps) => {
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
      
<path d="M21.698 18.0104H21.8751V13.8438H23.9584V9.67708H13.3647L21.698 18.0104ZM20.6042 22.8125L22.073 21.3438L2.92716 2.1875L1.448 3.65625L4.14591 6.35417C2.29175 7.4375 1.04175 9.45833 1.04175 11.7604C1.04175 15.2083 3.84383 18.0104 7.29175 18.0104C9.59383 18.0104 11.6147 16.7604 12.6876 14.8958L20.6042 22.8125ZM9.36466 11.5729C9.37508 11.6354 9.37508 11.6979 9.37508 11.7604C9.37508 12.9063 8.43758 13.8438 7.29175 13.8438C6.14591 13.8438 5.20841 12.9063 5.20841 11.7604C5.20841 10.6146 6.14591 9.67708 7.29175 9.67708C7.35425 9.67708 7.41675 9.67708 7.47925 9.6875L9.36466 11.5729Z" fill="currentColor"/>
    </svg>
  );
};

export default VpnKeyOffIcon;
