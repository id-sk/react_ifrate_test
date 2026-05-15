import React from 'react';

export interface HomeIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const HomeIcon = ({ size, ...props }: HomeIconProps) => {
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
        d="M10.4166 21.3541V15.1041H14.5833V21.3541H19.7916V13.0208H22.9166L12.4999 3.64581L2.08325 13.0208H5.20825V21.3541H10.4166Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default HomeIcon;
