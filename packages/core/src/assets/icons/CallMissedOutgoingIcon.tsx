import React from 'react';

export interface CallMissedOutgoingIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CallMissedOutgoingIcon = ({ size, ...props }: CallMissedOutgoingIconProps) => {
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
      
<path d="M3.125 8.54687L12.5 17.9219L19.7917 10.6302V15.4115H21.875V7.07812H13.5417V9.16146H18.3229L12.5 14.9844L4.59375 7.07812L3.125 8.54687Z" fill="currentColor"/>
    </svg>
  );
};

export default CallMissedOutgoingIcon;
