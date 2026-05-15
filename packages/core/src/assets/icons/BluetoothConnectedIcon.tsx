import React from 'react';

export interface BluetoothConnectedIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const BluetoothConnectedIcon = ({ size, ...props }: BluetoothConnectedIconProps) => {
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
        d="M7.29167 12.4999L5.20833 10.4166L3.125 12.4999L5.20833 14.5833L7.29167 12.4999ZM18.4479 8.03117L12.5 2.08325H11.4583V9.9895L6.67708 5.20825L5.20833 6.677L11.0312 12.4999L5.20833 18.3228L6.67708 19.7916L11.4583 15.0103V22.9166H12.5L18.4479 16.9687L13.9687 12.4999L18.4479 8.03117ZM13.5417 6.07284L15.5 8.03117L13.5417 9.9895V6.07284ZM15.5 16.9687L13.5417 18.927V15.0103L15.5 16.9687ZM19.7917 10.4166L17.7083 12.4999L19.7917 14.5833L21.875 12.4999L19.7917 10.4166Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default BluetoothConnectedIcon;
