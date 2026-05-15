import React from 'react';

export interface HeightIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const HeightIcon = ({ size, ...props }: HeightIconProps) => {
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
        d="M13.5416 7.28125H16.6666L12.4999 3.125L8.33325 7.28125H11.4583V17.7188H8.33325L12.4999 21.875L16.6666 17.7188H13.5416V7.28125Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default HeightIcon;
