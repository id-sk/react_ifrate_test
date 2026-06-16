import React from 'react';

export interface MediaBluetoothOffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MediaBluetoothOffIcon = ({ size, ...props }: MediaBluetoothOffIconProps) => {
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
      
<path d="M9.69271 5.69263V2.39054H15.9427V6.55721H11.776V7.77596L9.69271 5.69263ZM20.5469 14.8905L23.2344 17.5676L22.401 18.401L15.3385 11.3385L16.1719 10.5051L19.0365 13.3697V8.64054H19.6615L23.2344 12.2135L20.5469 14.8905ZM20.2865 13.3801L21.4635 12.203L20.2865 11.026V13.3801ZM22.3906 21.3385L20.9219 22.8072L16.776 18.6614L16.1719 19.2655L15.2865 18.3801L15.8906 17.776L11.776 13.6718V16.9739C11.776 19.276 9.92188 21.1405 7.61979 21.1405C5.31771 21.1405 3.44271 19.276 3.44271 16.9739C3.44271 14.6718 5.30729 12.8072 7.61979 12.8072C8.38021 12.8072 9.08854 13.026 9.70312 13.3801V11.5885L1.76562 3.66138L3.23437 2.19263L22.3906 21.3385Z" fill="currentColor"/>
    </svg>
  );
};

export default MediaBluetoothOffIcon;
