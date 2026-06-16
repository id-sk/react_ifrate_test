import React from 'react';

export interface HiveIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const HiveIcon = ({ size, ...props }: HiveIconProps) => {
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
      
<path d="M14.3647 8.3335L16.2397 5.2085L14.3647 2.0835H10.6355L8.7605 5.2085L10.6355 8.3335H14.3647Z" fill="currentColor"/>
<path d="M10.6355 9.37516L8.7605 12.5002L10.6355 15.6252H14.3647L16.2397 12.5002L14.3647 9.37516H10.6355Z" fill="currentColor"/>
<path d="M17.1355 11.9897H20.8751L22.7397 8.86475L20.8751 5.73975H17.1355L15.2605 8.86475L17.1355 11.9897Z" fill="currentColor"/>
<path d="M20.8751 13.0314H17.1355L15.2605 16.1564L17.1355 19.2814H20.8751L22.7397 16.1564L20.8751 13.0314Z" fill="currentColor"/>
<path d="M7.86466 11.9897L9.73966 8.86475L7.86466 5.73975H4.12508L2.2605 8.86475L4.12508 11.9897H7.86466Z" fill="currentColor"/>
<path d="M7.86466 13.0314H4.12508L2.2605 16.1564L4.12508 19.2814H7.86466L9.73966 16.1564L7.86466 13.0314Z" fill="currentColor"/>
<path d="M10.6355 16.6668L8.7605 19.7918L10.6355 22.9168H14.3647L16.2397 19.7918L14.3647 16.6668H10.6355Z" fill="currentColor"/>
    </svg>
  );
};

export default HiveIcon;
