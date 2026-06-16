import React from 'react';

export interface OpenInFullIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const OpenInFullIcon = ({ size, ...props }: OpenInFullIconProps) => {
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
      
<path d="M21.875 11.4583V3.125H13.5417L16.9688 6.55208L6.55208 16.9688L3.125 13.5417V21.875H11.4583L8.03125 18.4479L18.4479 8.03125L21.875 11.4583Z" fill="currentColor"/>
    </svg>
  );
};

export default OpenInFullIcon;
