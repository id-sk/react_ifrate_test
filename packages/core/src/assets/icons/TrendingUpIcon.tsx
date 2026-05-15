import React from 'react';

export interface TrendingUpIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TrendingUpIcon = ({ size, ...props }: TrendingUpIconProps) => {
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
        d="M16.6666 6.25L19.052 8.63542L13.9687 13.7188L9.802 9.55208L2.08325 17.2812L3.552 18.75L9.802 12.5L13.9687 16.6667L20.5312 10.1146L22.9166 12.5V6.25H16.6666Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default TrendingUpIcon;
