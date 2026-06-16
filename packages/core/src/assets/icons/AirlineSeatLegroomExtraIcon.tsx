import React from 'react';

export interface AirlineSeatLegroomExtraIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AirlineSeatLegroomExtraIcon = ({ size, ...props }: AirlineSeatLegroomExtraIconProps) => {
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
      
<path d="M3.64535 12.5V3.125H1.56201V12.5C1.56201 15.375 3.89535 17.7083 6.77035 17.7083H13.0203V15.625H6.77035C5.04118 15.625 3.64535 14.2292 3.64535 12.5ZM23.2599 17.9583C22.8641 17.2083 21.9162 16.9479 21.1453 17.3021L20.0099 17.8229L16.4578 10.5521C16.1037 9.84375 15.3849 9.38542 14.5933 9.38542L10.937 9.375V3.125H4.68701V11.4583C4.68701 13.1875 6.08285 14.5833 7.81201 14.5833H15.1037L18.6558 21.875L22.5308 20.1042C23.3328 19.7292 23.6766 18.75 23.2599 17.9583Z" fill="currentColor"/>
    </svg>
  );
};

export default AirlineSeatLegroomExtraIcon;
