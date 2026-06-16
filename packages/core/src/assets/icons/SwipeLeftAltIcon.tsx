import React from 'react';

export interface SwipeLeftAltIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SwipeLeftAltIcon = ({ size, ...props }: SwipeLeftAltIconProps) => {
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
      
<path d="M11.5625 13.5416C12.0417 15.9166 14.1458 17.7083 16.6667 17.7083C19.5417 17.7083 21.875 15.375 21.875 12.5C21.875 9.62496 19.5417 7.29163 16.6667 7.29163C14.1458 7.29163 12.0417 9.08329 11.5625 11.4583H7.11458L8.77083 9.80204L7.29167 8.33329L3.125 12.5L7.29167 16.6666L8.76042 15.1979L7.11458 13.5416H11.5625Z" fill="currentColor"/>
    </svg>
  );
};

export default SwipeLeftAltIcon;
