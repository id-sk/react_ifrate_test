import React from 'react';

export interface HevcIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const HevcIcon = ({ size, ...props }: HevcIconProps) => {
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
        d="M5.72917 11.4583H4.6875V9.375H3.125V15.625H4.6875V13.0208H5.72917V15.625H7.29167V9.375H5.72917V11.4583Z"
        fill="currentColor"
      />
      <path
        d="M21.875 11.4583V10.4167C21.875 9.84375 21.4062 9.375 20.8333 9.375H18.75C18.1771 9.375 17.7083 9.84375 17.7083 10.4167V14.5833C17.7083 15.1562 18.1771 15.625 18.75 15.625H20.8333C21.4062 15.625 21.875 15.1562 21.875 14.5833V13.5417H20.3125V14.0625H19.2708V10.9375H20.3125V11.4583H21.875Z"
        fill="currentColor"
      />
      <path
        d="M14.8438 14.0625L14.0625 9.375H12.5L13.5417 15.625H16.1458L17.1875 9.375H15.625L14.8438 14.0625Z"
        fill="currentColor"
      />
      <path
        d="M8.33333 9.375V15.625H11.9792V14.0625H9.89583V13.0208H11.9792V11.4583H9.89583V10.9375H11.9792V9.375H8.33333Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default HevcIcon;
