import React from 'react';

export interface OfflineBoltIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const OfflineBoltIcon = ({ size, ...props }: OfflineBoltIconProps) => {
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
      
<path d="M12.5001 2.10413C6.7605 2.10413 2.10425 6.76038 2.10425 12.5C2.10425 18.2395 6.7605 22.8958 12.5001 22.8958C18.2397 22.8958 22.8959 18.2395 22.8959 12.5C22.8959 6.76038 18.2397 2.10413 12.5001 2.10413ZM11.9584 20.8333V14.3125H8.33341L13.5417 4.16663V10.6875H17.0313L11.9584 20.8333Z" fill="currentColor"/>
    </svg>
  );
};

export default OfflineBoltIcon;
