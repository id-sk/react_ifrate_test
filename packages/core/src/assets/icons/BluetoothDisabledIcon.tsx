import React from 'react';

export interface BluetoothDisabledIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const BluetoothDisabledIcon = ({ size, ...props }: BluetoothDisabledIconProps) => {
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
        d="M13.5417 6.07284L15.5001 8.03117L13.8334 9.69784L15.3022 11.1666L18.448 8.02075L12.5001 2.08325H11.4584V7.32284L13.5417 9.40617V6.07284ZM5.6355 4.16659L4.16675 5.63534L11.0313 12.4999L5.20841 18.3228L6.67716 19.7916L11.4584 15.0103V22.9166H12.5001L16.9688 18.4478L19.3647 20.8333L20.8334 19.3645L5.6355 4.16659ZM13.5417 18.927V15.0103L15.5001 16.9687L13.5417 18.927Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default BluetoothDisabledIcon;
