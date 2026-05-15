import React from 'react';

export interface CallMissedIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CallMissedIcon = ({ size, ...props }: CallMissedIconProps) => {
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
        d="M20.4062 7.07812L12.5 14.9844L6.67708 9.16146H11.4583V7.07812H3.125V15.4115H5.20833V10.6302L12.5 17.9219L21.875 8.54687L20.4062 7.07812Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CallMissedIcon;
