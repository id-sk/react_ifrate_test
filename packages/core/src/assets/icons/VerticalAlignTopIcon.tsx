import React from 'react';

export interface VerticalAlignTopIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const VerticalAlignTopIcon = ({ size, ...props }: VerticalAlignTopIconProps) => {
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
      
<path d="M8.33341 11.4583H11.4584V21.875H13.5417V11.4583H16.6667L12.5001 7.29167L8.33341 11.4583ZM4.16675 3.125V5.20833H20.8334V3.125H4.16675Z" fill="currentColor"/>
    </svg>
  );
};

export default VerticalAlignTopIcon;
