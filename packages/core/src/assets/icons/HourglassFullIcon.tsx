import React from 'react';

export interface HourglassFullIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const HourglassFullIcon = ({ size, ...props }: HourglassFullIconProps) => {
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
      
<path d="M6.25 2.08331V8.33331H6.26042L6.25 8.34373L10.4167 12.5L6.25 16.6666L6.26042 16.6771H6.25V22.9166H18.75V16.6771H18.7396L18.75 16.6666L14.5833 12.5L18.75 8.34373L18.7396 8.33331H18.75V2.08331H6.25Z" fill="currentColor"/>
    </svg>
  );
};

export default HourglassFullIcon;
