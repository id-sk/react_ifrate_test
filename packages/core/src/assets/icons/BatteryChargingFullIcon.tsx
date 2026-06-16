import React from 'react';

export interface BatteryChargingFullIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const BatteryChargingFullIcon = ({ size, ...props }: BatteryChargingFullIconProps) => {
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
      
<path d="M16.3229 4.16659H14.5833V2.08325H10.4166V4.16659H8.67704C7.91663 4.16659 7.29163 4.79159 7.29163 5.552V21.5208C7.29163 22.2916 7.91663 22.9166 8.67704 22.9166H16.3125C17.0833 22.9166 17.7083 22.2916 17.7083 21.5312V5.552C17.7083 4.79159 17.0833 4.16659 16.3229 4.16659ZM11.4583 20.8333V15.1041H9.37496L13.5416 7.29159V13.0208H15.625L11.4583 20.8333Z" fill="currentColor"/>
    </svg>
  );
};

export default BatteryChargingFullIcon;
