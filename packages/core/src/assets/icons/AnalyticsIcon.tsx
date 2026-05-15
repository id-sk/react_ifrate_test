import React from 'react';

export interface AnalyticsIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AnalyticsIcon = ({ size, ...props }: AnalyticsIconProps) => {
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
        d="M19.7917 3.125H5.20833C4.0625 3.125 3.125 4.0625 3.125 5.20833V19.7917C3.125 20.9375 4.0625 21.875 5.20833 21.875H19.7917C20.9375 21.875 21.875 20.9375 21.875 19.7917V5.20833C21.875 4.0625 20.9375 3.125 19.7917 3.125ZM9.375 17.7083H7.29167V12.5H9.375V17.7083ZM13.5417 17.7083H11.4583V14.5833H13.5417V17.7083ZM13.5417 12.5H11.4583V10.4167H13.5417V12.5ZM17.7083 17.7083H15.625V7.29167H17.7083V17.7083Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default AnalyticsIcon;
