import React from 'react';

export interface RemoveDoneIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const RemoveDoneIcon = ({ size, ...props }: RemoveDoneIconProps) => {
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
      
<path d="M1.86979 12.4948L7.68229 18.3177L6.21354 19.7865L0.390625 13.9635L1.86979 12.4948ZM2.33854 4.39062L13.4427 15.5052L12.1094 16.8385L7.75521 12.4948L6.28646 13.9635L12.1094 19.7865L14.9115 16.9844L20.0052 22.0781L21.474 20.6094L3.80729 2.92188L2.33854 4.39062ZM17.8594 14.0469L24.6094 7.28646L23.1302 5.81771L16.3802 12.5677L17.8594 14.0469ZM18.7135 7.28646L17.2448 5.81771L13.4427 9.63021L14.9115 11.099L18.7135 7.28646Z" fill="currentColor"/>
    </svg>
  );
};

export default RemoveDoneIcon;
