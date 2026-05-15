import React from 'react';

export interface VibrationIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const VibrationIcon = ({ size, ...props }: VibrationIconProps) => {
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
        d="M0 15.625H2.08333V9.375H0V15.625ZM3.125 17.7083H5.20833V7.29167H3.125V17.7083ZM22.9167 9.375V15.625H25V9.375H22.9167ZM19.7917 17.7083H21.875V7.29167H19.7917V17.7083ZM17.1875 3.125H7.8125C6.94792 3.125 6.25 3.82292 6.25 4.6875V20.3125C6.25 21.1771 6.94792 21.875 7.8125 21.875H17.1875C18.0521 21.875 18.75 21.1771 18.75 20.3125V4.6875C18.75 3.82292 18.0521 3.125 17.1875 3.125ZM16.6667 19.7917H8.33333V5.20833H16.6667V19.7917Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default VibrationIcon;
