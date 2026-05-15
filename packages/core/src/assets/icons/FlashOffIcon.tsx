import React from 'react';

export interface FlashOffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FlashOffIcon = ({ size, ...props }: FlashOffIconProps) => {
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
        d="M4.96867 3.12516L3.64575 4.44808L8.85409 9.65641V13.5418H11.9791V22.9168L15.7083 16.521L20.0312 20.8335L21.3541 19.5106L4.96867 3.12516ZM19.2708 10.4168H15.1041L19.2708 2.0835H8.85409V4.35433L17.6666 13.1668L19.2708 10.4168Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FlashOffIcon;
