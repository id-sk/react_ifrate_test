import React from 'react';

export interface AutoGraphIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AutoGraphIcon = ({ size, ...props }: AutoGraphIconProps) => {
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
        d="M14.6459 11.1353L12.5001 10.1562L14.6459 9.177L15.6251 7.03117L16.6042 9.177L18.7501 10.1562L16.6042 11.1353L15.6251 13.2812L14.6459 11.1353ZM4.16675 15.3645L5.14591 13.2187L7.29175 12.2395L5.14591 11.2603L4.16675 9.1145L3.18758 11.2603L1.04175 12.2395L3.18758 13.2187L4.16675 15.3645ZM8.85425 10.1562L9.98966 7.64575L12.5001 6.51034L9.98966 5.37492L8.85425 2.8645L7.71883 5.37492L5.20841 6.51034L7.71883 7.64575L8.85425 10.1562ZM4.68758 22.1353L10.9376 15.8749L15.1042 20.0416L23.9584 10.0833L22.4897 8.6145L15.1042 16.9166L10.9376 12.7499L3.12508 20.5728L4.68758 22.1353Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default AutoGraphIcon;
