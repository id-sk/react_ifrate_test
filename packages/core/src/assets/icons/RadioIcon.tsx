import React from 'react';

export interface RadioIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const RadioIcon = ({ size, ...props }: RadioIconProps) => {
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
        d="M3.37504 6.92708C2.61462 7.21875 2.08337 7.98958 2.08337 8.85417V21.3542C2.08337 22.5 3.01046 23.4375 4.16671 23.4375H20.8334C21.9896 23.4375 22.9167 22.5 22.9167 21.3542V8.85417C22.9167 7.69792 21.9896 6.77083 20.8334 6.77083H8.64587L17.25 3.29167L16.5417 1.5625L3.37504 6.92708ZM7.29171 21.3542C5.56254 21.3542 4.16671 19.9583 4.16671 18.2292C4.16671 16.5 5.56254 15.1042 7.29171 15.1042C9.02087 15.1042 10.4167 16.5 10.4167 18.2292C10.4167 19.9583 9.02087 21.3542 7.29171 21.3542ZM20.8334 13.0208H18.75V10.9375H16.6667V13.0208H4.16671V8.85417H20.8334V13.0208Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default RadioIcon;
