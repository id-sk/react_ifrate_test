import React from 'react';

export interface UpgradeIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const UpgradeIcon = ({ size, ...props }: UpgradeIconProps) => {
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
      
<path d="M16.6666 18.75V20.8333H8.33325V18.75H16.6666ZM11.4583 8.32288V16.6666H13.5416V8.32288H16.6666L12.4999 4.16663L8.33325 8.32288H11.4583Z" fill="currentColor"/>
    </svg>
  );
};

export default UpgradeIcon;
