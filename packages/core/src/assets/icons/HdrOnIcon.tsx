import React from 'react';

export interface HdrOnIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const HdrOnIcon = ({ size, ...props }: HdrOnIconProps) => {
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
      
<path d="M21.875 11.9792V10.9375C21.875 10.1042 21.1458 9.375 20.3125 9.375H16.6667V15.625H18.2292V13.5417H19.375L20.3125 15.625H21.875L20.9375 13.4375C21.4583 13.125 21.875 12.6042 21.875 11.9792ZM20.3125 11.9792H18.2292V10.9375H20.3125V11.9792ZM6.77083 11.4583H4.6875V9.375H3.125V15.625H4.6875V13.0208H6.77083V15.625H8.33333V9.375H6.77083V11.4583ZM13.5417 9.375H9.89583V15.625H13.5417C14.375 15.625 15.1042 14.8958 15.1042 14.0625V10.9375C15.1042 10.1042 14.375 9.375 13.5417 9.375ZM13.5417 14.0625H11.4583V10.9375H13.5417V14.0625Z" fill="currentColor"/>
    </svg>
  );
};

export default HdrOnIcon;
