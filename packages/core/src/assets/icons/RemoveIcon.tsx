import React from 'react';

export interface RemoveIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const RemoveIcon = ({ size, ...props }: RemoveIconProps) => {
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
      
<path d="M19.7917 13.5416H5.20837V11.4583H19.7917V13.5416Z" fill="currentColor"/>
    </svg>
  );
};

export default RemoveIcon;
