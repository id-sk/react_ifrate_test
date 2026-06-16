import React from 'react';

export interface BedtimeIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const BedtimeIcon = ({ size, ...props }: BedtimeIconProps) => {
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
      
<path d="M13.5521 2.09688C7.5625 1.88855 2.78125 6.68021 2.78125 12.4927C2.78125 18.2427 7.44792 22.9094 13.1979 22.9094C17.0625 22.9094 20.4167 20.8052 22.2188 17.6802C14.3958 17.4198 9.625 8.89896 13.5521 2.09688Z" fill="currentColor"/>
    </svg>
  );
};

export default BedtimeIcon;
