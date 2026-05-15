import React from 'react';

export interface Icon1xMobiledataIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Icon1xMobiledataIcon = ({ size, ...props }: Icon1xMobiledataIconProps) => {
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
        d="M4.6875 7.29175H8.85417V17.7084H6.77083V9.37508H4.6875V7.29175ZM17.0104 12.2084L19.9583 7.29175H17.5312L15.8021 10.1772L14.0625 7.29175H11.6354L14.5833 12.2084L11.2812 17.7084H13.7083L15.7917 14.2292L17.875 17.7084H20.3125L17.0104 12.2084Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Icon1xMobiledataIcon;
