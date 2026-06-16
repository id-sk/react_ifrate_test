import React from 'react';

export interface SignalCellular4BarIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SignalCellular4BarIcon = ({ size, ...props }: SignalCellular4BarIconProps) => {
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
      
<path d="M2.08325 22.9166H22.9166V2.08325L2.08325 22.9166Z" fill="currentColor"/>
    </svg>
  );
};

export default SignalCellular4BarIcon;
