import React from 'react';

export interface AutoAwesomeMosaicIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AutoAwesomeMosaicIcon = ({ size, ...props }: AutoAwesomeMosaicIconProps) => {
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
      
<path d="M3.125 5.20833V19.7917C3.125 20.9375 4.05208 21.875 5.20833 21.875H11.4583V3.125H5.20833C4.05208 3.125 3.125 4.0625 3.125 5.20833ZM19.7917 3.125H13.5417V11.4583H21.875V5.20833C21.875 4.0625 20.9375 3.125 19.7917 3.125ZM13.5417 21.875H19.7917C20.9375 21.875 21.875 20.9375 21.875 19.7917V13.5417H13.5417V21.875Z" fill="currentColor"/>
    </svg>
  );
};

export default AutoAwesomeMosaicIcon;
