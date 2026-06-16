import React from 'react';

export interface TurnSlightRightIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TurnSlightRightIcon = ({ size, ...props }: TurnSlightRightIconProps) => {
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
      
<path d="M11.2917 4.1665H17.1875V10.0623H15.1042V7.71859L9.89583 12.9269V20.8332H7.8125V12.9373C7.8125 12.3853 8.03125 11.854 8.42708 11.4686L13.6354 6.26025H11.2917V4.1665Z" fill="currentColor"/>
    </svg>
  );
};

export default TurnSlightRightIcon;
