import React from 'react';

export interface ClearIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ClearIcon = ({ size, ...props }: ClearIconProps) => {
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
      
<path d="M19.7916 6.677L18.3228 5.20825L12.4999 11.0312L6.677 5.20825L5.20825 6.677L11.0312 12.4999L5.20825 18.3228L6.677 19.7916L12.4999 13.9687L18.3228 19.7916L19.7916 18.3228L13.9687 12.4999L19.7916 6.677Z" fill="currentColor"/>
    </svg>
  );
};

export default ClearIcon;
