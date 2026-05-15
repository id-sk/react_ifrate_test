import React from 'react';

export interface SignalCellularNullIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SignalCellularNullIcon = ({ size, ...props }: SignalCellularNullIconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.8333 7.1145V20.8333H7.1145L20.8333 7.1145ZM22.9166 2.08325L2.08325 22.9166H22.9166V2.08325Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SignalCellularNullIcon;
