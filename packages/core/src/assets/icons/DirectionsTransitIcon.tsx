import React from 'react';

export interface DirectionsTransitIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DirectionsTransitIcon = ({ size, ...props }: DirectionsTransitIconProps) => {
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
      
<path d="M12.5001 2.604C7.89591 2.604 4.16675 3.12484 4.16675 6.77067V16.6665C4.16675 18.6769 5.80216 20.3123 7.81258 20.3123L6.25008 21.8748V22.3957H18.7501V21.8748L17.1876 20.3123C19.198 20.3123 20.8334 18.6769 20.8334 16.6665V6.77067C20.8334 3.12484 17.1042 2.604 12.5001 2.604ZM7.81258 18.229C6.948 18.229 6.25008 17.5311 6.25008 16.6665C6.25008 15.8019 6.948 15.104 7.81258 15.104C8.67716 15.104 9.37508 15.8019 9.37508 16.6665C9.37508 17.5311 8.67716 18.229 7.81258 18.229ZM11.4584 11.979H6.25008V6.77067H11.4584V11.979ZM17.1876 18.229C16.323 18.229 15.6251 17.5311 15.6251 16.6665C15.6251 15.8019 16.323 15.104 17.1876 15.104C18.0522 15.104 18.7501 15.8019 18.7501 16.6665C18.7501 17.5311 18.0522 18.229 17.1876 18.229ZM18.7501 11.979H13.5417V6.77067H18.7501V11.979Z" fill="currentColor"/>
    </svg>
  );
};

export default DirectionsTransitIcon;
