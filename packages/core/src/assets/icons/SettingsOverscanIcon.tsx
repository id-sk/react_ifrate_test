import React from 'react';

export interface SettingsOverscanIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SettingsOverscanIcon = ({ size, ...props }: SettingsOverscanIconProps) => {
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
      
<path d="M12.5105 5.72917L10.4167 8.33333H14.5834L12.5105 5.72917ZM18.7501 10.4167V14.5833L21.3542 12.5104L18.7501 10.4167ZM6.25008 10.4167L3.64591 12.5104L6.25008 14.5833V10.4167ZM14.5834 16.6667H10.4167L12.5105 19.2708L14.5834 16.6667ZM21.8751 3.125H3.12508C1.97925 3.125 1.04175 4.0625 1.04175 5.20833V19.7917C1.04175 20.9375 1.97925 21.875 3.12508 21.875H21.8751C23.0209 21.875 23.9584 20.9375 23.9584 19.7917V5.20833C23.9584 4.0625 23.0209 3.125 21.8751 3.125ZM21.8751 19.8021H3.12508V5.19792H21.8751V19.8021Z" fill="currentColor"/>
    </svg>
  );
};

export default SettingsOverscanIcon;
