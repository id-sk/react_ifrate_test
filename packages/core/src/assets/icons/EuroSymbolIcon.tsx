import React from 'react';

export interface EuroSymbolIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const EuroSymbolIcon = ({ size, ...props }: EuroSymbolIconProps) => {
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
      
<path d="M15.625 19.2708C13.0104 19.2708 10.75 17.7917 9.625 15.625H15.625V13.5417H8.9375C8.88542 13.1979 8.85417 12.8542 8.85417 12.5C8.85417 12.1458 8.88542 11.8021 8.9375 11.4583H15.625V9.375H9.625C10.75 7.20833 13.0208 5.72917 15.625 5.72917C17.3021 5.72917 18.8437 6.34375 20.0312 7.36458L21.875 5.52083C20.2188 4.03125 18.0208 3.125 15.625 3.125C11.5417 3.125 8.08333 5.73958 6.79167 9.375H3.125V11.4583H6.3125C6.27083 11.8021 6.25 12.1458 6.25 12.5C6.25 12.8542 6.27083 13.1979 6.3125 13.5417H3.125V15.625H6.79167C8.08333 19.2604 11.5417 21.875 15.625 21.875C18.0312 21.875 20.2188 20.9688 21.875 19.4792L20.0208 17.6354C18.8437 18.6562 17.3125 19.2708 15.625 19.2708Z" fill="currentColor"/>
    </svg>
  );
};

export default EuroSymbolIcon;
