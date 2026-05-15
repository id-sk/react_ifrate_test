import React from 'react';

export interface SportsFootballIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SportsFootballIcon = ({ size, ...props }: SportsFootballIconProps) => {
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
        d="M3.14577 16.2709C3.06244 18.7918 3.4791 20.7918 3.84369 21.1563C4.20827 21.5209 6.21869 21.948 8.7291 21.8543L3.14577 16.2709Z"
        fill="currentColor"
      />
      <path
        d="M13.6249 3.41676C11.1979 3.85426 8.63535 4.8126 6.7291 6.72926C4.82285 8.64593 3.8541 11.198 3.4166 13.6251L11.3645 21.573C13.802 21.1459 16.3541 20.1772 18.2604 18.2605C20.1666 16.3438 21.1354 13.7918 21.5729 11.3647L13.6249 3.41676ZM10.3124 16.1459L8.8541 14.6876L14.6874 8.85426L16.1458 10.3126L10.3124 16.1459Z"
        fill="currentColor"
      />
      <path
        d="M21.8541 8.72926C21.9374 6.20843 21.5208 4.20843 21.1562 3.84385C20.7916 3.47926 18.7812 3.05218 16.2708 3.14593L21.8541 8.72926Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SportsFootballIcon;
