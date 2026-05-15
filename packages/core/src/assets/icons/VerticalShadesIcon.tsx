import React from 'react';

export interface VerticalShadesIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const VerticalShadesIcon = ({ size, ...props }: VerticalShadesIconProps) => {
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
        d="M20.8333 19.7917V3.125H4.16659V19.7917H2.08325V21.875H22.9166V19.7917H20.8333ZM10.4166 19.7917V5.20833H14.5833V19.7917H10.4166Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default VerticalShadesIcon;
