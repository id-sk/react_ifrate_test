import React from 'react';

export interface SettingsVoiceIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SettingsVoiceIcon = ({ size, ...props }: SettingsVoiceIconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_3230_40060)">
        <path
          d="M7.29159 24.4792H9.37492V22.3959H7.29159V24.4792ZM12.4999 13.0209C14.2291 13.0209 15.6145 11.625 15.6145 9.89587L15.6249 3.64587C15.6249 1.91671 14.2291 0.520874 12.4999 0.520874C10.7708 0.520874 9.37492 1.91671 9.37492 3.64587V9.89587C9.37492 11.625 10.7708 13.0209 12.4999 13.0209ZM11.4583 24.4792H13.5416V22.3959H11.4583V24.4792ZM15.6249 24.4792H17.7083V22.3959H15.6249V24.4792ZM19.7916 9.89587H18.0208C18.0208 13.0209 15.3749 15.2084 12.4999 15.2084C9.62492 15.2084 6.97908 13.0209 6.97908 9.89587H5.20825C5.20825 13.448 8.04159 16.3855 11.4583 16.8959V20.3125H13.5416V16.8959C16.9583 16.3855 19.7916 13.448 19.7916 9.89587Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_3230_40060">
          <rect width="25" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SettingsVoiceIcon;
