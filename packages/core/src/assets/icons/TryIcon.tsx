import React from 'react';

export interface TryIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TryIcon = ({ size, ...props }: TryIconProps) => {
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
        d="M20.8333 2.08337H4.16659C3.02075 2.08337 2.08325 3.02087 2.08325 4.16671V22.9167L6.24992 18.75H20.8333C21.9791 18.75 22.9166 17.8125 22.9166 16.6667V4.16671C22.9166 3.02087 21.9791 2.08337 20.8333 2.08337ZM14.1353 12.0521L12.4999 15.625L10.8645 12.0521L7.29159 10.4167L10.8645 8.78129L12.4999 5.20837L14.1353 8.78129L17.7083 10.4167L14.1353 12.0521Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default TryIcon;
