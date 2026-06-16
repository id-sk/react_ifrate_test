import React from 'react';

export interface WifiProtectedSetupIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const WifiProtectedSetupIcon = ({ size, ...props }: WifiProtectedSetupIconProps) => {
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
      
<path d="M17.401 5.51042L19.7865 3.125H11.4531V11.4583L13.849 9.0625C15.901 10.5833 17.2344 13 17.2344 15.75C17.2344 17.1146 16.901 18.3958 16.3177 19.5312C18.7448 17.9479 20.3594 15.2187 20.3594 12.1042C20.3594 9.47917 19.2031 7.13542 17.401 5.51042Z" fill="currentColor"/>
<path d="M7.76562 9.25C7.76562 7.88542 8.09896 6.60417 8.68229 5.46875C6.24479 7.05208 4.64062 9.78125 4.64062 12.8958C4.64062 15.5208 5.78646 17.8646 7.59896 19.4896L5.20312 21.875H13.5365V13.5417L11.1406 15.9375C9.09896 14.4167 7.76562 12 7.76562 9.25Z" fill="currentColor"/>
    </svg>
  );
};

export default WifiProtectedSetupIcon;
