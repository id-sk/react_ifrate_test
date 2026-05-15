import React from 'react';

export interface TrendingFlatIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TrendingFlatIcon = ({ size, ...props }: TrendingFlatIconProps) => {
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
        d="M22.3958 12.5L18.2291 8.33337V11.4584H2.60413V13.5417H18.2291V16.6667L22.3958 12.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default TrendingFlatIcon;
