import React from 'react';

export interface MonitorWeightIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MonitorWeightIcon = ({ size, ...props }: MonitorWeightIconProps) => {
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
        d="M19.7917 3.125H5.20833C4.0625 3.125 3.125 4.0625 3.125 5.20833V19.7917C3.125 20.9375 4.0625 21.875 5.20833 21.875H19.7917C20.9375 21.875 21.875 20.9375 21.875 19.7917V5.20833C21.875 4.0625 20.9375 3.125 19.7917 3.125ZM12.5 12.5C10.7708 12.5 9.375 11.1042 9.375 9.375C9.375 7.64583 10.7708 6.25 12.5 6.25C14.2292 6.25 15.625 7.64583 15.625 9.375C15.625 11.1042 14.2292 12.5 12.5 12.5Z"
        fill="currentColor"
      />
      <path d="M11.4583 8.85417H10.4167V9.89583H11.4583V8.85417Z" fill="currentColor" />
      <path d="M13.0208 8.85417H11.9792V9.89583H13.0208V8.85417Z" fill="currentColor" />
      <path d="M14.5833 8.85417H13.5417V9.89583H14.5833V8.85417Z" fill="currentColor" />
    </svg>
  );
};

export default MonitorWeightIcon;
