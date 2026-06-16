import React from 'react';

export interface GamepadIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const GamepadIcon = ({ size, ...props }: GamepadIconProps) => {
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
      
<path d="M15.6249 7.81242V2.08325H9.37492V7.81242L12.4999 10.9374L15.6249 7.81242ZM7.81242 9.37492H2.08325V15.6249H7.81242L10.9374 12.4999L7.81242 9.37492ZM9.37492 17.1874V22.9166H15.6249V17.1874L12.4999 14.0624L9.37492 17.1874ZM17.1874 9.37492L14.0624 12.4999L17.1874 15.6249H22.9166V9.37492H17.1874Z" fill="currentColor"/>
    </svg>
  );
};

export default GamepadIcon;
