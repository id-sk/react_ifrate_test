import React from 'react';

export interface EscalatorIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const EscalatorIcon = ({ size, ...props }: EscalatorIconProps) => {
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
      
<path d="M19.7917 3.125H5.20833C4.0625 3.125 3.125 4.0625 3.125 5.20833V19.7917C3.125 20.9375 4.0625 21.875 5.20833 21.875H19.7917C20.9375 21.875 21.875 20.9375 21.875 19.7917V5.20833C21.875 4.0625 20.9375 3.125 19.7917 3.125ZM17.7083 9.375H15.9375L10.7292 18.75H7.29167C6.42708 18.75 5.72917 18.0521 5.72917 17.1875C5.72917 16.3229 6.42708 15.625 7.29167 15.625H9.0625L14.2708 6.25H17.7083C18.5729 6.25 19.2708 6.94792 19.2708 7.8125C19.2708 8.67708 18.5729 9.375 17.7083 9.375Z" fill="currentColor"/>
    </svg>
  );
};

export default EscalatorIcon;
