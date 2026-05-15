import React from 'react';

export interface PlayLessonIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PlayLessonIcon = ({ size, ...props }: PlayLessonIconProps) => {
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
        d="M17.7084 10.9375C18.0625 10.9375 18.4063 10.9688 18.75 11.0208V3.64583C18.75 2.5 17.8125 1.5625 16.6667 1.5625H4.16671C3.02087 1.5625 2.08337 2.5 2.08337 3.64583V20.3125C2.08337 21.4583 3.02087 22.3958 4.16671 22.3958H11.7292C10.9063 21.2188 10.4167 19.7812 10.4167 18.2292C10.4167 14.1979 13.6771 10.9375 17.7084 10.9375ZM6.25004 10.9375V3.64583H11.4584V10.9375L8.85421 9.375L6.25004 10.9375Z"
        fill="currentColor"
      />
      <path
        d="M17.7084 13.0208C14.8334 13.0208 12.5 15.3542 12.5 18.2292C12.5 21.1042 14.8334 23.4375 17.7084 23.4375C20.5834 23.4375 22.9167 21.1042 22.9167 18.2292C22.9167 15.3542 20.5834 13.0208 17.7084 13.0208ZM16.4063 20.8333V15.625L20.573 18.2292L16.4063 20.8333Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PlayLessonIcon;
