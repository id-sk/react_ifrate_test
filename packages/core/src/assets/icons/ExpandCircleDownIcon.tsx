import React from 'react';

export interface ExpandCircleDownIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ExpandCircleDownIcon = ({ size, ...props }: ExpandCircleDownIconProps) => {
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
      
<path d="M12.5 2.0835C6.75004 2.0835 2.08337 6.75016 2.08337 12.5002C2.08337 18.2502 6.75004 22.9168 12.5 22.9168C18.25 22.9168 22.9167 18.2502 22.9167 12.5002C22.9167 6.75016 18.25 2.0835 12.5 2.0835ZM12.5 16.146L7.81254 11.4585L9.29171 9.98975L12.5 13.1981L15.7084 9.98975L17.1875 11.4585L12.5 16.146Z" fill="currentColor"/>
    </svg>
  );
};

export default ExpandCircleDownIcon;
