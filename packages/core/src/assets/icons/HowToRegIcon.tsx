import React from 'react';

export interface HowToRegIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const HowToRegIcon = ({ size, ...props }: HowToRegIconProps) => {
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
      
<path fillRule="evenodd" clipRule="evenodd" d="M8.85425 17.4479L11.9792 14.3854C11.573 14.3438 11.2709 14.3229 10.9376 14.3229C8.15633 14.3229 2.60425 15.7187 2.60425 18.4896V20.5729H11.9792L8.85425 17.4479ZM10.9376 12.2396C13.2397 12.2396 15.1042 10.375 15.1042 8.07292C15.1042 5.77083 13.2397 3.90625 10.9376 3.90625C8.6355 3.90625 6.77091 5.77083 6.77091 8.07292C6.77091 10.375 8.6355 12.2396 10.9376 12.2396Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M15.5938 21.0938L11.9792 17.4479L13.4376 15.9792L15.5938 18.1458L20.9376 12.7604L22.3959 14.2292L15.5938 21.0938Z" fill="currentColor"/>
    </svg>
  );
};

export default HowToRegIcon;
