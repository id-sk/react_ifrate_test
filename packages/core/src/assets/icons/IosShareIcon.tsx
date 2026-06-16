import React from 'react';

export interface IosShareIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const IosShareIcon = ({ size, ...props }: IosShareIconProps) => {
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
      
<path d="M16.6667 5.20817L15.1876 6.68734L13.5313 5.03109V16.6665H11.4688V5.03109L9.81258 6.68734L8.33341 5.20817L12.5001 1.0415L16.6667 5.20817ZM20.8334 10.4165V21.8748C20.8334 23.0207 19.8959 23.9582 18.7501 23.9582H6.25008C5.09383 23.9582 4.16675 23.0207 4.16675 21.8748V10.4165C4.16675 9.26025 5.09383 8.33317 6.25008 8.33317H9.37508V10.4165H6.25008V21.8748H18.7501V10.4165H15.6251V8.33317H18.7501C19.8959 8.33317 20.8334 9.26025 20.8334 10.4165Z" fill="currentColor"/>
    </svg>
  );
};

export default IosShareIcon;
