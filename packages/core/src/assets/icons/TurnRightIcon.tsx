import React from 'react';

export interface TurnRightIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TurnRightIcon = ({ size, ...props }: TurnRightIconProps) => {
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
      
<path d="M15.802 10.4168L14.1458 12.0731L15.6249 13.5418L19.7916 9.37516L15.6249 5.2085L14.1562 6.67725L15.802 8.3335H7.29159C6.14575 8.3335 5.20825 9.271 5.20825 10.4168V19.7918H7.29159V10.4168H15.802Z" fill="currentColor"/>
    </svg>
  );
};

export default TurnRightIcon;
