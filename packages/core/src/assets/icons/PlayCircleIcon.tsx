import React from 'react';

export interface PlayCircleIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PlayCircleIcon = ({ size, ...props }: PlayCircleIconProps) => {
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
        d="M12.4999 2.08337C6.74992 2.08337 2.08325 6.75004 2.08325 12.5C2.08325 18.25 6.74992 22.9167 12.4999 22.9167C18.2499 22.9167 22.9166 18.25 22.9166 12.5C22.9166 6.75004 18.2499 2.08337 12.4999 2.08337ZM9.89575 17.1875V7.81254L17.1874 12.5L9.89575 17.1875Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PlayCircleIcon;
