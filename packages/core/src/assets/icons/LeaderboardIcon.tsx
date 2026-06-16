import React from 'react';

export interface LeaderboardIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LeaderboardIcon = ({ size, ...props }: LeaderboardIconProps) => {
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
      
<path d="M7.81254 21.875H2.08337V9.375H7.81254V21.875ZM15.3646 3.125H9.63546V21.875H15.3646V3.125ZM22.9167 11.4583H17.1875V21.875H22.9167V11.4583Z" fill="currentColor"/>
    </svg>
  );
};

export default LeaderboardIcon;
