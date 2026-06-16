import React from 'react';

export interface RoomIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const RoomIcon = ({ size, ...props }: RoomIconProps) => {
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
      
<path d="M12.4999 2.08337C8.46867 2.08337 5.20825 5.34379 5.20825 9.37504C5.20825 14.8438 12.4999 22.9167 12.4999 22.9167C12.4999 22.9167 19.7916 14.8438 19.7916 9.37504C19.7916 5.34379 16.5312 2.08337 12.4999 2.08337ZM12.4999 11.9792C11.0624 11.9792 9.89575 10.8125 9.89575 9.37504C9.89575 7.93754 11.0624 6.77087 12.4999 6.77087C13.9374 6.77087 15.1041 7.93754 15.1041 9.37504C15.1041 10.8125 13.9374 11.9792 12.4999 11.9792Z" fill="currentColor"/>
    </svg>
  );
};

export default RoomIcon;
