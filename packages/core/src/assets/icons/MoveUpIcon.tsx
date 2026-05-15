import React from 'react';

export interface MoveUpIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MoveUpIcon = ({ size, ...props }: MoveUpIconProps) => {
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
        d="M3.64583 14.0624C3.64583 11.5103 5.47917 9.40617 7.89583 8.94784L6.34375 10.5103L7.8125 11.9791L11.9792 7.802L7.8125 3.64575L6.34375 5.1145L7.98958 6.76034V6.82284C4.375 7.24992 1.5625 10.3333 1.5625 14.0624C1.5625 18.0937 4.82292 21.3541 8.85417 21.3541H11.9792V19.2708H8.85417C5.97917 19.2708 3.64583 16.9374 3.64583 14.0624Z"
        fill="currentColor"
      />
      <path
        d="M14.0625 14.0624V21.3541H23.4375V14.0624H14.0625ZM21.3542 19.2708H16.1458V16.1458H21.3542V19.2708Z"
        fill="currentColor"
      />
      <path d="M23.4375 4.68742H14.0625V11.9791H23.4375V4.68742Z" fill="currentColor" />
    </svg>
  );
};

export default MoveUpIcon;
