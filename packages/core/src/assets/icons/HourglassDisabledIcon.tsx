import React from 'react';

export interface HourglassDisabledIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const HourglassDisabledIcon = ({ size, ...props }: HourglassDisabledIconProps) => {
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
      
<path d="M9.06771 3.47915H17.401V7.12498L14.4427 10.0833L15.7448 11.3854L19.4844 7.65623L19.474 7.64581H19.4844V1.39581H6.98438V2.61456L9.06771 4.6979V3.47915Z" fill="currentColor"/>
<path d="M2.92188 1.49998L1.45312 2.96873L10.724 12.2396L6.98438 15.9791L6.99479 15.9896H6.98438V22.2291H19.4844V21.0104L22.0781 23.6041L23.5469 22.1354L2.92188 1.49998ZM17.401 20.1458H9.06771V16.5L12.026 13.5416L17.401 18.9271V20.1458Z" fill="currentColor"/>
    </svg>
  );
};

export default HourglassDisabledIcon;
