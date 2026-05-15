import React from 'react';

export interface SportsHandballIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SportsHandballIcon = ({ size, ...props }: SportsHandballIconProps) => {
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
        d="M14.8684 5.77047C14.2955 6.76006 14.6392 8.04131 15.6288 8.61422C16.6184 9.18714 17.8997 8.84339 18.4726 7.85381C19.0455 6.86422 18.7017 5.58297 17.7122 5.01006C16.7226 4.43714 15.4413 4.78089 14.8684 5.77047Z"
        fill="currentColor"
      />
      <path
        d="M16.5038 10.3642C16.5038 10.3642 14.8059 9.38506 13.7955 8.80172C11.3163 7.36422 10.4622 4.17672 11.8997 1.69756L10.0976 0.65589C8.44132 3.51006 8.96216 7.03089 11.108 9.31214L5.74341 18.6038L7.54549 19.6455L9.10799 16.9371L10.9101 17.9788L7.78507 23.3955L9.58716 24.4371L16.1392 13.0934C17.3267 14.708 17.5247 16.9371 16.4622 18.7809L18.2642 19.8226C19.9309 16.958 19.5976 12.9684 16.5038 10.3642Z"
        fill="currentColor"
      />
      <path
        d="M13.2851 3.47881C14.0351 3.90589 14.983 3.65589 15.4205 2.90589C15.8476 2.15589 15.5976 1.20797 14.8476 0.770474C14.0976 0.34339 13.1497 0.59339 12.7122 1.34339C12.2851 2.09339 12.5351 3.05172 13.2851 3.47881Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SportsHandballIcon;
