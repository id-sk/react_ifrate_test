import React from 'react';

export interface SdCardIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SdCardIcon = ({ size, ...props }: SdCardIconProps) => {
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
      
<path d="M18.7501 2.0835H10.4167L4.18758 8.3335L4.16675 20.8335C4.16675 21.9793 5.10425 22.9168 6.25008 22.9168H18.7501C19.8959 22.9168 20.8334 21.9793 20.8334 20.8335V4.16683C20.8334 3.021 19.8959 2.0835 18.7501 2.0835ZM12.5001 8.3335H10.4167V4.16683H12.5001V8.3335ZM15.6251 8.3335H13.5417V4.16683H15.6251V8.3335ZM18.7501 8.3335H16.6667V4.16683H18.7501V8.3335Z" fill="currentColor"/>
    </svg>
  );
};

export default SdCardIcon;
