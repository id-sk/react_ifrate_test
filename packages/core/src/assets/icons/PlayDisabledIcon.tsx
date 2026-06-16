import React from 'react';

export interface PlayDisabledIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PlayDisabledIcon = ({ size, ...props }: PlayDisabledIconProps) => {
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
      
<path d="M8.85409 4.88546V4.68754L20.3124 11.9792L17.6562 13.6771L8.85409 4.88546ZM21.3541 20.0313L4.96867 3.64587L3.64575 4.96879L8.85409 10.1771V19.2709L14.4062 15.7292L20.0312 21.3542L21.3541 20.0313Z" fill="currentColor"/>
    </svg>
  );
};

export default PlayDisabledIcon;
