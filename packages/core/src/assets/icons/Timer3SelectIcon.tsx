import React from 'react';

export interface Timer3SelectIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Timer3SelectIcon = ({ size, ...props }: Timer3SelectIconProps) => {
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
      
<path d="M21.3541 11.4583V13.5416H17.1874V14.5833H19.7916C20.6562 14.5833 21.3541 15.2916 21.3541 16.1458V18.2291C21.3541 19.0937 20.6562 19.7916 19.7916 19.7916H15.1041V17.7083H19.2708V16.6666H16.6666C15.8124 16.6666 15.1041 15.9583 15.1041 15.1041V13.0208C15.1041 12.1666 15.8124 11.4583 16.6666 11.4583H21.3541ZM3.64575 5.20825V8.33325H9.89575V10.9374H3.64575V14.0624H9.89575V16.6666H3.64575V19.7916H9.89575C11.6249 19.7916 13.0208 18.3958 13.0208 16.6666V14.6874C13.0208 13.4791 12.0416 12.4999 10.8333 12.4999C12.0416 12.4999 13.0208 11.5208 13.0208 10.3124V8.33325C13.0208 6.60409 11.6249 5.20825 9.89575 5.20825H3.64575Z" fill="currentColor"/>
    </svg>
  );
};

export default Timer3SelectIcon;
