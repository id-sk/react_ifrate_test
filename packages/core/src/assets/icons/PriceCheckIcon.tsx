import React from 'react';

export interface PriceCheckIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PriceCheckIcon = ({ size, ...props }: PriceCheckIconProps) => {
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
      
<path d="M11.4584 13.5417V9.375C11.4584 8.80208 10.9897 8.33333 10.4167 8.33333H6.25008V6.25H11.4584V4.16667H8.85425V3.125H6.77091V4.16667H5.20841C4.6355 4.16667 4.16675 4.63542 4.16675 5.20833V9.375C4.16675 9.94792 4.6355 10.4167 5.20841 10.4167H9.37508V12.5H4.16675V14.5833H6.77091V15.625H8.85425V14.5833H10.4167C10.9897 14.5833 11.4584 14.1146 11.4584 13.5417Z" fill="currentColor"/>
<path d="M19.3647 13.0417L13.4688 18.9271L10.5209 15.9792L9.05216 17.4583L13.4688 21.875L20.8334 14.5104L19.3647 13.0417Z" fill="currentColor"/>
    </svg>
  );
};

export default PriceCheckIcon;
