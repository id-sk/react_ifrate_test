import React from 'react';

export interface CameraFrontIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CameraFrontIcon = ({ size, ...props }: CameraFrontIconProps) => {
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
      
<g clipPath="url(#clip0_3239_32799)">
<path d="M10.4166 20.8333H5.20825V22.9167H10.4166V25L13.5416 21.875L10.4166 18.75V20.8333ZM14.5833 20.8333V22.9167H19.7916V20.8333H14.5833ZM12.4999 8.33333C13.6458 8.33333 14.5833 7.39583 14.5833 6.25C14.5833 5.10417 13.6458 4.16667 12.4999 4.16667C11.3541 4.16667 10.427 5.10417 10.427 6.25C10.427 7.39583 11.3541 8.33333 12.4999 8.33333ZM17.7083 0H7.29159C6.14575 0 5.20825 0.9375 5.20825 2.08333V16.6667C5.20825 17.8125 6.14575 18.75 7.29159 18.75H17.7083C18.8541 18.75 19.7916 17.8125 19.7916 16.6667V2.08333C19.7916 0.9375 18.8541 0 17.7083 0ZM7.29159 2.08333H17.7083V13.0208C17.7083 11.2812 14.2395 10.4167 12.4999 10.4167C10.7603 10.4167 7.29159 11.2812 7.29159 13.0208V2.08333Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_3239_32799">
<rect width="25" height="25" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
};

export default CameraFrontIcon;
