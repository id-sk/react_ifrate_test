import React from 'react';

export interface DetailsIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DetailsIcon = ({ size, ...props }: DetailsIconProps) => {
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
        d="M12.4999 3.125L2.08325 21.875H22.9166L12.4999 3.125ZM13.5416 9.29167L19.3749 19.7917H13.5416V9.29167ZM11.4583 9.29167V19.7917H5.62492L11.4583 9.29167Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DetailsIcon;
