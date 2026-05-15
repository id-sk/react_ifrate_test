import React from 'react';

export interface DarkModeIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DarkModeIcon = ({ size, ...props }: DarkModeIconProps) => {
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
        d="M12.5 3.125C7.32292 3.125 3.125 7.32292 3.125 12.5C3.125 17.6771 7.32292 21.875 12.5 21.875C17.6771 21.875 21.875 17.6771 21.875 12.5C21.875 12.0208 21.8333 11.5417 21.7708 11.0833C20.75 12.5104 19.0833 13.4375 17.1875 13.4375C14.0833 13.4375 11.5625 10.9167 11.5625 7.8125C11.5625 5.92708 12.4896 4.25 13.9167 3.22917C13.4583 3.16667 12.9792 3.125 12.5 3.125Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DarkModeIcon;
