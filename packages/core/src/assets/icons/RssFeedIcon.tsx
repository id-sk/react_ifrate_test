import React from 'react';

export interface RssFeedIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const RssFeedIcon = ({ size, ...props }: RssFeedIconProps) => {
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
      
<path d="M6.66658 20.6041C7.92073 20.6041 8.93742 19.5874 8.93742 18.3333C8.93742 17.0791 7.92073 16.0624 6.66658 16.0624C5.41244 16.0624 4.39575 17.0791 4.39575 18.3333C4.39575 19.5874 5.41244 20.6041 6.66658 20.6041Z" fill="currentColor"/>
<path d="M4.39575 4.39575V7.34367C11.7187 7.34367 17.6562 13.2812 17.6562 20.6041H20.6041C20.6041 11.6562 13.3437 4.39575 4.39575 4.39575ZM4.39575 10.2916V13.2395C8.45825 13.2395 11.7603 16.5416 11.7603 20.6041H14.7083C14.7083 14.9062 10.0937 10.2916 4.39575 10.2916Z" fill="currentColor"/>
    </svg>
  );
};

export default RssFeedIcon;
