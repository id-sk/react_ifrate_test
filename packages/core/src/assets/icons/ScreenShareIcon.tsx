import React from 'react';

export interface ScreenShareIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ScreenShareIcon = ({ size, ...props }: ScreenShareIconProps) => {
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
        d="M20.8333 18.7501C21.9792 18.7501 22.9062 17.8126 22.9062 16.6667L22.9167 6.25008C22.9167 5.09383 21.9792 4.16675 20.8333 4.16675H4.16667C3.01042 4.16675 2.08333 5.09383 2.08333 6.25008V16.6667C2.08333 17.8126 3.01042 18.7501 4.16667 18.7501H0V20.8334H25V18.7501H20.8333ZM13.5417 15.073V12.7917C10.6458 12.7917 8.73958 13.6772 7.29167 15.6251C7.875 12.8438 9.48958 10.073 13.5417 9.5105V7.29175L17.7083 11.1772L13.5417 15.073Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ScreenShareIcon;
