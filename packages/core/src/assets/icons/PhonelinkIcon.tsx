import React from 'react';

export interface PhonelinkIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PhonelinkIcon = ({ size, ...props }: PhonelinkIconProps) => {
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
        d="M4.16667 6.25008H22.9167V4.16675H4.16667C3.02083 4.16675 2.08333 5.10425 2.08333 6.25008V17.7084H0V20.8334H14.5833V17.7084H4.16667V6.25008ZM23.9583 8.33341H17.7083C17.1354 8.33341 16.6667 8.80216 16.6667 9.37508V19.7917C16.6667 20.3647 17.1354 20.8334 17.7083 20.8334H23.9583C24.5312 20.8334 25 20.3647 25 19.7917V9.37508C25 8.80216 24.5312 8.33341 23.9583 8.33341ZM22.9167 17.7084H18.75V10.4167H22.9167V17.7084Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PhonelinkIcon;
