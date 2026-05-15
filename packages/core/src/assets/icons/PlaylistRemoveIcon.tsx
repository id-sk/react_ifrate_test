import React from 'react';

export interface PlaylistRemoveIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PlaylistRemoveIcon = ({ size, ...props }: PlaylistRemoveIconProps) => {
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
        d="M14.5833 8.33329H3.125V10.4166H14.5833V8.33329ZM14.5833 4.16663H3.125V6.24996H14.5833V4.16663ZM3.125 14.5833H10.4167V12.5H3.125V14.5833ZM15.0104 20.8333L17.7083 18.1354L20.4062 20.8333L21.875 19.3645L19.1771 16.6666L21.875 13.9687L20.4062 12.5L17.7083 15.1979L15.0104 12.5L13.5417 13.9687L16.2396 16.6666L13.5417 19.3645L15.0104 20.8333Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PlaylistRemoveIcon;
