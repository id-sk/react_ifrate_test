import React from 'react';

export interface PlaylistAddIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PlaylistAddIcon = ({ size, ...props }: PlaylistAddIconProps) => {
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
        d="M14.0626 9.37504H2.60425V11.4584H14.0626V9.37504ZM14.0626 5.20837H2.60425V7.29171H14.0626V5.20837ZM18.2292 13.5417V9.37504H16.1459V13.5417H11.9792V15.625H16.1459V19.7917H18.2292V15.625H22.3959V13.5417H18.2292ZM2.60425 15.625H9.89591V13.5417H2.60425V15.625Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PlaylistAddIcon;
