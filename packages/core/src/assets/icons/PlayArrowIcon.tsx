import React from 'react';

export interface PlayArrowIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PlayArrowIcon = ({ size, ...props }: PlayArrowIconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M6.77075 5.20837V19.7917L18.2291 12.5L6.77075 5.20837Z" fill="currentColor" />
    </svg>
  );
};

export default PlayArrowIcon;
