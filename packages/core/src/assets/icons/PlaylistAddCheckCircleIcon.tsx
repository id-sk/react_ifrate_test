import React from 'react';

export interface PlaylistAddCheckCircleIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PlaylistAddCheckCircleIcon = ({ size, ...props }: PlaylistAddCheckCircleIconProps) => {
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
        d="M12.4999 2.08337C6.74992 2.08337 2.08325 6.75004 2.08325 12.5C2.08325 18.25 6.74992 22.9167 12.4999 22.9167C18.2499 22.9167 22.9166 18.25 22.9166 12.5C22.9166 6.75004 18.2499 2.08337 12.4999 2.08337ZM7.29159 7.29171H14.5833V9.37504H7.29159V7.29171ZM7.29159 10.4167H14.5833V12.5H7.29159V10.4167ZM10.4166 15.625H7.29159V13.5417H10.4166V15.625ZM14.6353 19.125L11.6874 16.1771L13.1562 14.7084L14.6249 16.1771L18.3228 12.5L19.7916 13.9688L14.6353 19.125Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PlaylistAddCheckCircleIcon;
