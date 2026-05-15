import React from 'react';

export interface BluetoothIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const BluetoothIcon = ({ size, ...props }: BluetoothIconProps) => {
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
        d="M19.1197 8.03117L13.1718 2.08325H12.1301V9.9895L7.34888 5.20825L5.88013 6.677L11.703 12.4999L5.88013 18.3228L7.34888 19.7916L12.1301 15.0103V22.9166H13.1718L19.1197 16.9687L14.6405 12.4999L19.1197 8.03117ZM14.2135 6.07284L16.1718 8.03117L14.2135 9.9895V6.07284ZM16.1718 16.9687L14.2135 18.927V15.0103L16.1718 16.9687Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default BluetoothIcon;
