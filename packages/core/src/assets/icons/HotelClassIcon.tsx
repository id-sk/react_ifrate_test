import React from 'react';

export interface HotelClassIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const HotelClassIcon = ({ size, ...props }: HotelClassIconProps) => {
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
      
<path d="M8.58333 10.4166H0.6875L7.11458 15.0104L4.67708 22.9166L11.1042 18.0312L17.5417 22.9166L15.0937 15.0104L21.5208 10.4166H13.625L11.1042 2.08331L8.58333 10.4166ZM21.8958 22.9166L19.9583 16.6562L24.3125 13.5416H20.7292L17.5208 15.8333L19.0417 20.75L21.8958 22.9166ZM17.3542 8.33331L15.4583 2.08331L14.375 5.67706L15.1771 8.33331H17.3542Z" fill="currentColor"/>
    </svg>
  );
};

export default HotelClassIcon;
