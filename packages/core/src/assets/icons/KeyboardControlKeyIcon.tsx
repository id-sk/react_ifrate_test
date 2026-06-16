import React from 'react';

export interface KeyboardControlKeyIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const KeyboardControlKeyIcon = ({ size, ...props }: KeyboardControlKeyIconProps) => {
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
      
<path d="M5.20825 15.4115L6.677 16.8803L12.4999 11.0678L18.3228 16.8803L19.7916 15.4115L12.4999 8.11987L5.20825 15.4115Z" fill="currentColor"/>
    </svg>
  );
};

export default KeyboardControlKeyIcon;
