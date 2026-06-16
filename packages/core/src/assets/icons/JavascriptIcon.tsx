import React from 'react';

export interface JavascriptIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const JavascriptIcon = ({ size, ...props }: JavascriptIconProps) => {
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
      
<path d="M13.0208 14.5833V13.5417H14.5833V14.0625H16.6666V13.0208H14.0624C13.4895 13.0208 13.0208 12.5521 13.0208 11.9792V10.4167C13.0208 9.84375 13.4895 9.375 14.0624 9.375H17.1874C17.7603 9.375 18.2291 9.84375 18.2291 10.4167V11.4583H16.6666V10.9375H14.5833V11.9792H17.1874C17.7603 11.9792 18.2291 12.4479 18.2291 13.0208V14.5833C18.2291 15.1562 17.7603 15.625 17.1874 15.625H14.0624C13.4895 15.625 13.0208 15.1562 13.0208 14.5833ZM9.89575 9.375V14.0625H8.33325V13.0208H6.77075V14.0625C6.77075 14.9271 7.46867 15.625 8.33325 15.625H9.89575C10.7603 15.625 11.4583 14.9271 11.4583 14.0625V9.375C11.4583 9.375 10.7603 9.375 9.89575 9.375Z" fill="currentColor"/>
    </svg>
  );
};

export default JavascriptIcon;
