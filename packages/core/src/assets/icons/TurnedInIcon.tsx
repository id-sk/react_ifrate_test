import React from 'react';

export interface TurnedInIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TurnedInIcon = ({ size, ...props }: TurnedInIconProps) => {
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
      
<path d="M17.7083 3.125H7.29159C6.14575 3.125 5.21867 4.0625 5.21867 5.20833L5.20825 21.875L12.4999 18.75L19.7916 21.875V5.20833C19.7916 4.0625 18.8541 3.125 17.7083 3.125Z" fill="currentColor"/>
    </svg>
  );
};

export default TurnedInIcon;
