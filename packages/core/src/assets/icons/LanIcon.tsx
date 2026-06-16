import React from 'react';

export interface LanIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LanIcon = ({ size, ...props }: LanIconProps) => {
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
      
<path d="M13.5417 22.9166H21.875V15.6249H18.75V11.4583H13.5417V9.37492H16.6667V2.08325H8.33333V9.37492H11.4583V11.4583H6.25V15.6249H3.125V22.9166H11.4583V15.6249H8.33333V13.5416H16.6667V15.6249H13.5417V22.9166Z" fill="currentColor"/>
    </svg>
  );
};

export default LanIcon;
