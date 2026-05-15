import React from 'react';

export interface TimerOffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TimerOffIcon = ({ size, ...props }: TimerOffIconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M16.3646 1.24463H10.1146V3.32796H16.3646V1.24463Z" fill="currentColor" />
      <path
        d="M14.2813 8.5363V10.7967L21.5521 18.0675C22.2292 16.7759 22.6146 15.3071 22.6146 13.7446C22.6146 11.5363 21.8438 9.50505 20.5625 7.90088L22.0417 6.42171C21.5938 5.89046 21.1042 5.39046 20.5729 4.95296L19.0938 6.43213C17.4792 5.14046 15.4479 4.36963 13.2396 4.36963C11.6771 4.36963 10.2083 4.75505 8.91667 5.43213L12.0208 8.5363H14.2813Z"
        fill="currentColor"
      />
      <path
        d="M3.66667 3.13005L2.1875 4.5988L5.72917 8.14046C4.5625 9.70296 3.86458 11.6405 3.86458 13.7446C3.86458 18.9217 8.05208 23.1196 13.2396 23.1196C15.3438 23.1196 17.2812 22.4217 18.8438 21.255L21.3438 23.755L22.8125 22.2863L3.66667 3.13005Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default TimerOffIcon;
