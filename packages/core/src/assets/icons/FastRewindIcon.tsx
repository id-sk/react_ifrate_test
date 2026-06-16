import React from 'react';

export interface FastRewindIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FastRewindIcon = ({ size, ...props }: FastRewindIconProps) => {
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
      
<path d="M12.2397 18.75V6.25L3.3855 12.5L12.2397 18.75ZM12.7605 12.5L21.6147 18.75V6.25L12.7605 12.5Z" fill="currentColor"/>
    </svg>
  );
};

export default FastRewindIcon;
