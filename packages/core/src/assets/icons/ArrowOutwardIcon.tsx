import React from 'react';

export interface ArrowOutwardIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ArrowOutwardIcon = ({ size, ...props }: ArrowOutwardIconProps) => {
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
        d="M6.77091 5.72919V7.81252H15.7188L5.72925 17.8021L7.198 19.2709L17.1876 9.28127V18.2292H19.2709V5.72919H6.77091Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowOutwardIcon;
