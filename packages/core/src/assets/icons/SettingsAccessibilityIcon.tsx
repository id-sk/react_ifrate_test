import React from 'react';

export interface SettingsAccessibilityIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SettingsAccessibilityIcon = ({ size, ...props }: SettingsAccessibilityIconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_3230_40073)">
        <path
          d="M21.3542 4.16667C18.6354 4.89583 15.4479 5.20833 12.5 5.20833C9.55208 5.20833 6.36458 4.89583 3.64583 4.16667L3.125 6.25C5.0625 6.77083 7.29167 7.11458 9.375 7.29167V19.7917H11.4583V13.5417H13.5417V19.7917H15.625V7.29167C17.7083 7.11458 19.9375 6.77083 21.875 6.25L21.3542 4.16667ZM12.5 4.16667C13.6458 4.16667 14.5833 3.22917 14.5833 2.08333C14.5833 0.9375 13.6458 0 12.5 0C11.3542 0 10.4167 0.9375 10.4167 2.08333C10.4167 3.22917 11.3542 4.16667 12.5 4.16667ZM7.29167 25H9.375V22.9167H7.29167V25ZM11.4583 25H13.5417V22.9167H11.4583V25ZM15.625 25H17.7083V22.9167H15.625V25Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_3230_40073">
          <rect width="25" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SettingsAccessibilityIcon;
