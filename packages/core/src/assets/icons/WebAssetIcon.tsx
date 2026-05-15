import React from 'react';

export interface WebAssetIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const WebAssetIcon = ({ size, ...props }: WebAssetIconProps) => {
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
        d="M19.7917 4.16663H5.20833C4.05208 4.16663 3.125 5.10413 3.125 6.24996V18.75C3.125 19.8958 4.05208 20.8333 5.20833 20.8333H19.7917C20.9375 20.8333 21.875 19.8958 21.875 18.75V6.24996C21.875 5.10413 20.9479 4.16663 19.7917 4.16663ZM19.7917 18.75H5.20833V8.33329H19.7917V18.75Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default WebAssetIcon;
