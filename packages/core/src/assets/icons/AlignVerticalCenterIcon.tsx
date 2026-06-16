import React from 'react';

export interface AlignVerticalCenterIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AlignVerticalCenterIcon = ({ size, ...props }: AlignVerticalCenterIconProps) => {
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
      
<path d="M23 11.4583H17.7917V6.25H14.6667V11.4583H10.5V3.125H7.375V11.4583H2V13.5417H7.375V21.875H10.5V13.5417H14.6667V18.75H17.7917V13.5417H23V11.4583Z" fill="currentColor"/>
    </svg>
  );
};

export default AlignVerticalCenterIcon;
