import React from 'react';

export interface BatteryStdIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const BatteryStdIcon = ({ size, ...props }: BatteryStdIconProps) => {
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
      
<path d="M16.323 4.16659H14.5834V2.08325H10.4167V4.16659H8.67716C7.91675 4.16659 7.29175 4.79159 7.29175 5.552V21.5208C7.29175 22.2916 7.91675 22.9166 8.67716 22.9166H16.3126C17.0834 22.9166 17.7084 22.2916 17.7084 21.5312V5.552C17.7084 4.79159 17.0834 4.16659 16.323 4.16659Z" fill="currentColor"/>
    </svg>
  );
};

export default BatteryStdIcon;
