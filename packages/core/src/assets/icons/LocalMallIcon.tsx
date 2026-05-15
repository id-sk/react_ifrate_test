import React from 'react';

export interface LocalMallIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LocalMallIcon = ({ size, ...props }: LocalMallIconProps) => {
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
        d="M19.7917 6.77083H17.7083C17.7083 3.89583 15.375 1.5625 12.5 1.5625C9.625 1.5625 7.29167 3.89583 7.29167 6.77083H5.20833C4.0625 6.77083 3.13542 7.70833 3.13542 8.85417L3.125 21.3542C3.125 22.5 4.0625 23.4375 5.20833 23.4375H19.7917C20.9375 23.4375 21.875 22.5 21.875 21.3542V8.85417C21.875 7.70833 20.9375 6.77083 19.7917 6.77083ZM12.5 3.64583C14.2292 3.64583 15.625 5.04167 15.625 6.77083H9.375C9.375 5.04167 10.7708 3.64583 12.5 3.64583ZM12.5 14.0625C9.625 14.0625 7.29167 11.7292 7.29167 8.85417H9.375C9.375 10.5833 10.7708 11.9792 12.5 11.9792C14.2292 11.9792 15.625 10.5833 15.625 8.85417H17.7083C17.7083 11.7292 15.375 14.0625 12.5 14.0625Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default LocalMallIcon;
