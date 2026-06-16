import React from 'react';

export interface ModeCommentIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ModeCommentIcon = ({ size, ...props }: ModeCommentIconProps) => {
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
      
<path d="M22.9062 4.16659C22.9062 3.02075 21.9791 2.08325 20.8333 2.08325H4.16659C3.02075 2.08325 2.08325 3.02075 2.08325 4.16659V16.6666C2.08325 17.8124 3.02075 18.7499 4.16659 18.7499H18.7499L22.9166 22.9166L22.9062 4.16659Z" fill="currentColor"/>
    </svg>
  );
};

export default ModeCommentIcon;
