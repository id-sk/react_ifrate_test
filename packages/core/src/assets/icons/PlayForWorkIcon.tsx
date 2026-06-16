import React from 'react';

export interface PlayForWorkIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PlayForWorkIcon = ({ size, ...props }: PlayForWorkIconProps) => {
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
      
<path d="M11.4583 4.6875V10.5104H7.8125L12.5 15.1979L17.1875 10.5104H13.5417V4.6875H11.4583ZM6.25 14.0625C6.25 17.5104 9.05208 20.3125 12.5 20.3125C15.9479 20.3125 18.75 17.5104 18.75 14.0625H16.6667C16.6667 16.3646 14.8021 18.2292 12.5 18.2292C10.1979 18.2292 8.33333 16.3646 8.33333 14.0625H6.25Z" fill="currentColor"/>
    </svg>
  );
};

export default PlayForWorkIcon;
