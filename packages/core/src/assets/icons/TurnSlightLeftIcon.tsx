import React from 'react';

export interface TurnSlightLeftIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TurnSlightLeftIcon = ({ size, ...props }: TurnSlightLeftIconProps) => {
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
      
<path d="M13.7083 4.1665H7.8125V10.0623H9.89583V7.71859L15.1042 12.9269V20.8332H17.1875V12.9373C17.1875 12.3853 16.9687 11.854 16.5729 11.4686L11.3646 6.26025H13.7083V4.1665Z" fill="currentColor"/>
    </svg>
  );
};

export default TurnSlightLeftIcon;
