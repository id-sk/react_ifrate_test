import React from 'react';

export interface ForwardIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ForwardIcon = ({ size, ...props }: ForwardIconProps) => {
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
      
<path d="M12.5001 8.33341V4.16675L20.8334 12.5001L12.5001 20.8334V16.6667H4.16675V8.33341H12.5001Z" fill="currentColor"/>
    </svg>
  );
};

export default ForwardIcon;
