import React from 'react';

export interface SouthIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SouthIcon = ({ size, ...props }: SouthIconProps) => {
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
        d="M19.7916 15.6252L18.3228 14.1564L13.5416 18.9272V2.0835H11.4583V18.9272L6.677 14.146L5.20825 15.6252L12.4999 22.9168L19.7916 15.6252Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SouthIcon;
