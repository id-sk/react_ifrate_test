import React from 'react';

export interface SynagogueIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SynagogueIcon = ({ size, ...props }: SynagogueIconProps) => {
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
        d="M6.25008 8.33333V21.875H10.4167V16.6667C10.4167 15.5208 11.3542 14.5833 12.5001 14.5833C13.6459 14.5833 14.5834 15.5208 14.5834 16.6667V21.875H18.7501V8.33333L12.5001 3.125L6.25008 8.33333ZM14.0626 10.4167C14.0626 11.2812 13.3647 11.9792 12.5001 11.9792C11.6355 11.9792 10.9376 11.2812 10.9376 10.4167C10.9376 9.55208 11.6355 8.85417 12.5001 8.85417C13.3647 8.85417 14.0626 9.55208 14.0626 10.4167Z"
        fill="currentColor"
      />
      <path
        d="M3.12508 5.20833C1.97925 5.20833 1.04175 6.14583 1.04175 7.29167V8.33333H5.20841V7.29167C5.20841 6.14583 4.27091 5.20833 3.12508 5.20833Z"
        fill="currentColor"
      />
      <path d="M5.20841 9.375H1.04175V21.875H5.20841V9.375Z" fill="currentColor" />
      <path
        d="M21.8751 5.20833C20.7292 5.20833 19.7917 6.14583 19.7917 7.29167V8.33333H23.9584V7.29167C23.9584 6.14583 23.0209 5.20833 21.8751 5.20833Z"
        fill="currentColor"
      />
      <path d="M23.9584 9.375H19.7917V21.875H23.9584V9.375Z" fill="currentColor" />
    </svg>
  );
};

export default SynagogueIcon;
