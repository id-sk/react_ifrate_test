import React from 'react';

export interface SwipeUpAltIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SwipeUpAltIcon = ({ size, ...props }: SwipeUpAltIconProps) => {
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
      
<path d="M13.5417 7.11458L15.198 8.77083L16.6667 7.29167L12.5001 3.125L8.33341 7.29167L9.80216 8.76042L11.4584 7.11458V11.5625C9.08341 12.0417 7.29175 14.1458 7.29175 16.6667C7.29175 19.5417 9.62508 21.875 12.5001 21.875C15.3751 21.875 17.7084 19.5417 17.7084 16.6667C17.7084 14.1458 15.9167 12.0417 13.5417 11.5625V7.11458Z" fill="currentColor"/>
    </svg>
  );
};

export default SwipeUpAltIcon;
