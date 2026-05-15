import React from 'react';

export interface CurtainsIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CurtainsIcon = ({ size, ...props }: CurtainsIconProps) => {
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
        d="M20.8333 19.7917V3.125H4.16659V19.7917H2.08325V21.875H22.9166V19.7917H20.8333ZM8.53117 12.5C10.6562 11.0937 12.177 8.39583 12.4478 5.20833H12.5416C12.8124 8.39583 14.3333 11.0937 16.4583 12.5C14.3333 13.9062 12.8124 16.6042 12.5416 19.7917H12.4478C12.177 16.6042 10.6562 13.9062 8.53117 12.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CurtainsIcon;
