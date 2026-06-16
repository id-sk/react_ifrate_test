import React from 'react';

export interface MaximizeIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MaximizeIcon = ({ size, ...props }: MaximizeIconProps) => {
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
      
<path d="M3.125 11.4584H21.875V13.5417H3.125V11.4584Z" fill="currentColor"/>
    </svg>
  );
};

export default MaximizeIcon;
