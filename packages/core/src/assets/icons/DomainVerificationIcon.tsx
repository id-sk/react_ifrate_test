import React from 'react';

export interface DomainVerificationIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DomainVerificationIcon = ({ size, ...props }: DomainVerificationIconProps) => {
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
      
<path d="M17.2917 11.3334L15.8125 9.85425L11.3958 14.2813L9.1875 12.0626L7.70833 13.5417L11.3958 17.2292L17.2917 11.3334Z" fill="currentColor"/>
<path d="M19.7917 4.16675H5.20833C4.05208 4.16675 3.125 5.10425 3.125 6.25008V18.7501C3.125 19.8959 4.05208 20.8334 5.20833 20.8334H19.7917C20.9375 20.8334 21.875 19.8959 21.875 18.7501V6.25008C21.875 5.10425 20.9479 4.16675 19.7917 4.16675ZM19.7917 18.7501H5.20833V8.33341H19.7917V18.7501Z" fill="currentColor"/>
    </svg>
  );
};

export default DomainVerificationIcon;
