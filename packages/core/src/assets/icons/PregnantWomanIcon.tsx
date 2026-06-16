import React from 'react';

export interface PregnantWomanIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PregnantWomanIcon = ({ size, ...props }: PregnantWomanIconProps) => {
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
      
<path d="M9.37492 4.16671C9.37492 3.01046 10.302 2.08337 11.4583 2.08337C12.6145 2.08337 13.5416 3.01046 13.5416 4.16671C13.5416 5.32296 12.6145 6.25004 11.4583 6.25004C10.302 6.25004 9.37492 5.32296 9.37492 4.16671ZM16.6666 13.5417C16.6562 12.1459 15.802 10.9271 14.5833 10.4167C14.5833 8.68754 13.1874 7.29171 11.4583 7.29171C9.72909 7.29171 8.33325 8.68754 8.33325 10.4167V17.7084H10.4166V22.9167H13.5416V17.7084H16.6666V13.5417Z" fill="currentColor"/>
    </svg>
  );
};

export default PregnantWomanIcon;
