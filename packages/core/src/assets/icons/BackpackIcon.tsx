import React from 'react';

export interface BackpackIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const BackpackIcon = ({ size, ...props }: BackpackIconProps) => {
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
      
<path d="M20.8334 8.3335V20.8335C20.8334 21.9793 19.8959 22.9168 18.7501 22.9168H6.25008C5.10425 22.9168 4.16675 21.9793 4.16675 20.8335V8.3335C4.16675 6.396 5.50008 4.78141 7.29175 4.31266V2.0835H10.4167V4.16683H14.5834V2.0835H17.7084V4.31266C19.5001 4.78141 20.8334 6.396 20.8334 8.3335ZM6.25008 12.5002V14.5835H16.6667V16.6668H18.7501V12.5002H6.25008Z" fill="currentColor"/>
    </svg>
  );
};

export default BackpackIcon;
