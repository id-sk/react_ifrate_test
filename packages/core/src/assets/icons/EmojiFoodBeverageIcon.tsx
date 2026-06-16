import React from 'react';

export interface EmojiFoodBeverageIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const EmojiFoodBeverageIcon = ({ size, ...props }: EmojiFoodBeverageIconProps) => {
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
      
<path d="M19.7917 3.125H8.33333V5.625L10.2188 7.13542C10.3438 7.22917 10.4167 7.38542 10.4167 7.54167V11.9792C10.4167 12.2708 10.1875 12.5 9.89583 12.5H5.72917C5.4375 12.5 5.20833 12.2708 5.20833 11.9792V7.54167C5.20833 7.38542 5.28125 7.22917 5.40625 7.13542L7.29167 5.625V3.125H3.125V13.5417C3.125 15.8438 4.98958 17.7083 7.29167 17.7083H13.5417C15.8438 17.7083 17.7083 15.8438 17.7083 13.5417V10.4167H19.7917C20.9479 10.4167 21.875 9.47917 21.875 8.33333V5.20833C21.875 4.05208 20.9479 3.125 19.7917 3.125ZM19.7917 8.33333H17.7083V5.20833H19.7917V8.33333Z" fill="currentColor"/>
<path d="M19.7917 19.7917H3.125V21.875H19.7917V19.7917Z" fill="currentColor"/>
    </svg>
  );
};

export default EmojiFoodBeverageIcon;
