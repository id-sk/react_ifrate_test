import React from 'react';

export interface ChromeReaderModeIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ChromeReaderModeIcon = ({ size, ...props }: ChromeReaderModeIconProps) => {
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
      
<path d="M13.5417 11.9791H20.8334V13.5416H13.5417V11.9791ZM13.5417 9.37498H20.8334V10.9375H13.5417V9.37498ZM13.5417 14.5833H20.8334V16.1458H13.5417V14.5833ZM21.8751 3.64581H3.12508C1.97925 3.64581 1.04175 4.58331 1.04175 5.72915V19.2708C1.04175 20.4166 1.97925 21.3541 3.12508 21.3541H21.8751C23.0209 21.3541 23.9584 20.4166 23.9584 19.2708V5.72915C23.9584 4.58331 23.0209 3.64581 21.8751 3.64581ZM21.8751 19.2708H12.5001V5.72915H21.8751V19.2708Z" fill="currentColor"/>
    </svg>
  );
};

export default ChromeReaderModeIcon;
