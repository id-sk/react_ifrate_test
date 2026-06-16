import React from 'react';

export interface ExpandIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ExpandIcon = ({ size, ...props }: ExpandIconProps) => {
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
      
<path d="M4.16675 20.8333H20.8334V22.9166H4.16675V20.8333ZM4.16675 2.08331H20.8334V4.16665H4.16675V2.08331ZM13.5417 9.37498H16.6667L12.5001 5.20831L8.33341 9.37498H11.4584V15.625H8.33341L12.5001 19.7916L16.6667 15.625H13.5417V9.37498Z" fill="currentColor"/>
    </svg>
  );
};

export default ExpandIcon;
