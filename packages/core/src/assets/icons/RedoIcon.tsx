import React from 'react';

export interface RedoIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const RedoIcon = ({ size, ...props }: RedoIconProps) => {
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
      
<path d="M19.4063 11.5625C17.4792 9.88542 14.9792 8.85417 12.2188 8.85417C7.375 8.85417 3.28125 12.0104 1.84375 16.375L4.30208 17.1875C5.39583 13.8646 8.52083 11.4583 12.2188 11.4583C14.25 11.4583 16.1042 12.2083 17.5521 13.4167L13.7813 17.1875H23.1562V7.8125L19.4063 11.5625Z" fill="currentColor"/>
    </svg>
  );
};

export default RedoIcon;
