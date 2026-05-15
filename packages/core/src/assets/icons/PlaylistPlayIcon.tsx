import React from 'react';

export interface PlaylistPlayIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PlaylistPlayIcon = ({ size, ...props }: PlaylistPlayIconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M14.0626 8.85417H2.60425V10.9375H14.0626V8.85417Z" fill="currentColor" />
      <path d="M14.0626 4.6875H2.60425V6.77083H14.0626V4.6875Z" fill="currentColor" />
      <path d="M9.89591 13.0208H2.60425V15.1042H9.89591V13.0208Z" fill="currentColor" />
      <path d="M16.1459 11.9792V20.3125L22.3959 16.1458L16.1459 11.9792Z" fill="currentColor" />
    </svg>
  );
};

export default PlaylistPlayIcon;
