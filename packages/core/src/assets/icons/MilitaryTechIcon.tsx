import React from 'react';

export interface MilitaryTechIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MilitaryTechIcon = ({ size, ...props }: MilitaryTechIconProps) => {
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
      
<path d="M17.7084 10.8647V2.0835H7.29175V10.8647C7.29175 11.2293 7.47925 11.5731 7.80216 11.7606L12.1563 14.3752L11.1251 16.8127L7.573 17.1147L10.2709 19.4481L9.448 22.9168L12.5001 21.0731L15.5522 22.9168L14.7397 19.4481L17.4376 17.1147L13.8855 16.8127L12.8542 14.3752L17.2084 11.7606C17.5209 11.5731 17.7084 11.2397 17.7084 10.8647ZM13.5417 12.7397L12.5001 13.3647L11.4584 12.7397V3.12516H13.5417V12.7397Z" fill="currentColor"/>
    </svg>
  );
};

export default MilitaryTechIcon;
