import React from 'react';

export interface NoMeetingRoomIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const NoMeetingRoomIcon = ({ size, ...props }: NoMeetingRoomIconProps) => {
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
      
<path d="M12.1198 10.7969H11.0781V12.8802H13.1615V11.8385L23.2969 21.974L21.974 23.2969L15.2448 16.5677V21.2135H3.78646V19.1302H5.86979V7.19271L1.70312 3.02604L3.02604 1.70312L12.1198 10.7969ZM15.2448 11.3073L6.40104 2.46354H15.2448V3.50521H20.4531V16.5156L18.3698 14.4323V5.58854H15.2448V11.3073Z" fill="currentColor"/>
    </svg>
  );
};

export default NoMeetingRoomIcon;
