import React from 'react';

export interface SpatialAudioOffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SpatialAudioOffIcon = ({ size, ...props }: SpatialAudioOffIconProps) => {
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
        d="M9.89583 14.5834C12.197 14.5834 14.0625 12.7179 14.0625 10.4167C14.0625 8.11552 12.197 6.25004 9.89583 6.25004C7.59465 6.25004 5.72917 8.11552 5.72917 10.4167C5.72917 12.7179 7.59465 14.5834 9.89583 14.5834Z"
        fill="currentColor"
      />
      <path
        d="M16.5521 17.25C14.8021 16.3542 12.5312 15.625 9.89583 15.625C7.26042 15.625 4.98958 16.3542 3.23958 17.25C2.19792 17.7813 1.5625 18.8542 1.5625 20.0209V22.9167H18.2292V20.0209C18.2292 18.8542 17.5937 17.7813 16.5521 17.25Z"
        fill="currentColor"
      />
      <path
        d="M20.6875 2.08337L19.2188 3.55212C22.0625 6.39587 22.0625 11.0209 19.2188 13.8646L20.6875 15.3334C24.3542 11.6771 24.3542 5.73962 20.6875 2.08337Z"
        fill="currentColor"
      />
      <path
        d="M17.75 12.3959C19.7812 10.3646 19.7812 7.06254 17.75 5.03129L16.2812 6.50004C17.5 7.71879 17.5 9.69796 16.2812 10.9167L17.75 12.3959Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SpatialAudioOffIcon;
