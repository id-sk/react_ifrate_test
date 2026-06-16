import React from 'react';

export interface HorizontalSplitIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const HorizontalSplitIcon = ({ size, ...props }: HorizontalSplitIconProps) => {
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
      
<path d="M3.125 19.7916H21.875V13.5416H3.125V19.7916ZM3.125 11.4583H21.875V9.37498H3.125V11.4583ZM3.125 5.20831V7.29165H21.875V5.20831H3.125Z" fill="currentColor"/>
    </svg>
  );
};

export default HorizontalSplitIcon;
