import React from 'react';

export interface HolidayVillageIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const HolidayVillageIcon = ({ size, ...props }: HolidayVillageIconProps) => {
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
        d="M18.7499 20.8332V8.69775L14.2187 4.1665H11.2708L16.6666 9.56234V20.8332H18.7499ZM22.9166 20.8332V6.96859L20.1145 4.1665H17.1666L20.8333 7.83317V20.8332H22.9166ZM8.33325 4.1665L2.08325 10.4165V20.8332H7.29159V15.6248H9.37492V20.8332H14.5833V10.4165L8.33325 4.1665ZM9.37492 13.5415H7.29159V11.4582H9.37492V13.5415Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default HolidayVillageIcon;
