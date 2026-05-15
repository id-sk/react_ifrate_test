import React from 'react';

export interface Icon5gIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Icon5gIcon = ({ size, ...props }: Icon5gIconProps) => {
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
        d="M17.7083 13.5416H19.7917V15.625H14.5833V9.37496H21.875C21.875 8.22913 20.9375 7.29163 19.7917 7.29163H14.5833C13.4375 7.29163 12.5 8.22913 12.5 9.37496V15.625C12.5 16.7708 13.4375 17.7083 14.5833 17.7083H19.7917C20.9375 17.7083 21.875 16.7708 21.875 15.625V11.4583H17.7083V13.5416Z"
        fill="currentColor"
      />
      <path
        d="M3.125 13.5416H8.33333V15.625H3.125V17.7083H8.33333C9.47917 17.7083 10.4167 16.7708 10.4167 15.625V13.5416C10.4167 12.3958 9.47917 11.4583 8.33333 11.4583H5.20833V9.37496H10.4167V7.29163H3.125V13.5416Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Icon5gIcon;
