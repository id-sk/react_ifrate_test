import React from 'react';

export interface SettingsBackupRestoreIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SettingsBackupRestoreIcon = ({ size, ...props }: SettingsBackupRestoreIconProps) => {
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
        d="M16.1458 12.5C16.1458 11.3542 15.2083 10.4167 14.0625 10.4167C12.9167 10.4167 11.9792 11.3542 11.9792 12.5C11.9792 13.6458 12.9167 14.5833 14.0625 14.5833C15.2083 14.5833 16.1458 13.6458 16.1458 12.5ZM14.0625 3.125C8.88542 3.125 4.6875 7.32292 4.6875 12.5H1.5625L5.72917 16.6667L9.89583 12.5H6.77083C6.77083 8.46875 10.0312 5.20833 14.0625 5.20833C18.0938 5.20833 21.3542 8.46875 21.3542 12.5C21.3542 16.5312 18.0938 19.7917 14.0625 19.7917C12.4896 19.7917 11.0312 19.2812 9.83333 18.4375L8.35417 19.9375C9.9375 21.1458 11.9167 21.875 14.0625 21.875C19.2396 21.875 23.4375 17.6771 23.4375 12.5C23.4375 7.32292 19.2396 3.125 14.0625 3.125Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SettingsBackupRestoreIcon;
