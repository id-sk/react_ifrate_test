import React from 'react';

export interface SaveAltIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SaveAltIcon = ({ size, ...props }: SaveAltIconProps) => {
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
      
<path d="M19.7917 12.5V19.7917H5.20833V12.5H3.125V19.7917C3.125 20.9375 4.0625 21.875 5.20833 21.875H19.7917C20.9375 21.875 21.875 20.9375 21.875 19.7917V12.5H19.7917ZM13.5417 13.1979L16.2396 10.5104L17.7083 11.9792L12.5 17.1875L7.29167 11.9792L8.76042 10.5104L11.4583 13.1979V3.125H13.5417V13.1979Z" fill="currentColor"/>
    </svg>
  );
};

export default SaveAltIcon;
