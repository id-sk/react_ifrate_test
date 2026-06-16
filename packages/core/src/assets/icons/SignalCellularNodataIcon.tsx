import React from 'react';

export interface SignalCellularNodataIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SignalCellularNodataIcon = ({ size, ...props }: SignalCellularNodataIconProps) => {
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
      
<path d="M22.9166 13.5416H13.5416V22.9166H2.08325L22.9166 2.08325V13.5416ZM21.8749 16.052L20.4062 14.5833L18.2291 16.7603L16.052 14.5833L14.5833 16.052L16.7603 18.2291L14.5833 20.4062L16.052 21.8749L18.2291 19.7083L20.4062 21.8749L21.8749 20.4062L19.7083 18.2291L21.8749 16.052Z" fill="currentColor"/>
    </svg>
  );
};

export default SignalCellularNodataIcon;
