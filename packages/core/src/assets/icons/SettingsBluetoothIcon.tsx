import React from 'react';

export interface SettingsBluetoothIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SettingsBluetoothIcon = ({ size, ...props }: SettingsBluetoothIconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_3230_40069)">
        <path
          d="M12.1302 25H14.2136V22.9167H12.1302V25ZM7.96358 25H10.0469V22.9167H7.96358V25ZM16.2969 25H18.3802V22.9167H16.2969V25ZM19.1198 5.94792L13.1719 0H12.1302V7.90625L7.349 3.125L5.88025 4.59375L11.7032 10.4167L5.88025 16.2396L7.349 17.7083L12.1302 12.9271V20.8333H13.1719L19.1198 14.8854L14.6407 10.4167L19.1198 5.94792ZM14.2136 3.98958L16.1719 5.94792L14.2136 7.90625V3.98958ZM16.1719 14.8854L14.2136 16.8438V12.9271L16.1719 14.8854Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_3230_40069">
          <rect width="25" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SettingsBluetoothIcon;
