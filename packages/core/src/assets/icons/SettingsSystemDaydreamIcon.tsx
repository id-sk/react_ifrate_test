import React from 'react';

export interface SettingsSystemDaydreamIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SettingsSystemDaydreamIcon = ({ size, ...props }: SettingsSystemDaydreamIconProps) => {
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
        d="M9.37496 16.6667H16.1458C17.5833 16.6667 18.75 15.5 18.75 14.0625C18.75 12.625 17.5833 11.4583 16.1458 11.4583H16.0937C15.8437 9.69792 14.3333 8.33333 12.5 8.33333C11.0416 8.33333 9.79163 9.19792 9.20829 10.4375H9.04163C7.46871 10.6042 6.24996 11.9271 6.24996 13.5417C6.24996 15.2708 7.64579 16.6667 9.37496 16.6667ZM21.875 3.125H3.12496C1.97913 3.125 1.04163 4.0625 1.04163 5.20833V19.7917C1.04163 20.9375 1.97913 21.875 3.12496 21.875H21.875C23.0208 21.875 23.9583 20.9375 23.9583 19.7917V5.20833C23.9583 4.0625 23.0208 3.125 21.875 3.125ZM21.875 19.8021H3.12496V5.19792H21.875V19.8021Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SettingsSystemDaydreamIcon;
