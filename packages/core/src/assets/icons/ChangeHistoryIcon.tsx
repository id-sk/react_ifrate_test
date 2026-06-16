import React from 'react';

export interface ChangeHistoryIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ChangeHistoryIcon = ({ size, ...props }: ChangeHistoryIconProps) => {
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
      
<path d="M12.4999 8.09377L19.1562 18.75H5.84367L12.4999 8.09377ZM12.4999 4.16669L2.08325 20.8334H22.9166L12.4999 4.16669Z" fill="currentColor"/>
    </svg>
  );
};

export default ChangeHistoryIcon;
