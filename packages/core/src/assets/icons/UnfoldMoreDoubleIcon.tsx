import React from 'react';

export interface UnfoldMoreDoubleIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const UnfoldMoreDoubleIcon = ({ size, ...props }: UnfoldMoreDoubleIconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_3230_40026)">
        <path
          d="M12.5 8.15625L15.8021 11.4583L17.2708 9.98958L12.5 5.20833L7.71875 9.98958L9.19792 11.4583L12.5 8.15625ZM12.5 2.94792L15.8021 6.25L17.2708 4.78125L12.5 0L7.71875 4.78125L9.19792 6.25L12.5 2.94792ZM12.5 22.0521L9.19792 18.75L7.72917 20.2188L12.5 25L17.2812 20.2188L15.8021 18.75L12.5 22.0521ZM12.5 16.8438L9.19792 13.5417L7.72917 15.0104L12.5 19.7917L17.2812 15.0104L15.8021 13.5417L12.5 16.8438Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_3230_40026">
          <rect width="25" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default UnfoldMoreDoubleIcon;
