import React from 'react';

export interface HealthAndSafetyIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const HealthAndSafetyIcon = ({ size, ...props }: HealthAndSafetyIconProps) => {
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
        d="M10.9376 13.5418H8.33341V10.4168H10.9376V7.81266H14.0626V10.4168H16.6667V13.5418H14.0626V16.146H10.9376V13.5418ZM12.5001 2.0835L4.16675 5.2085V11.5522C4.16675 16.8127 7.71883 21.7189 12.5001 22.9168C17.2813 21.7189 20.8334 16.8127 20.8334 11.5522V5.2085L12.5001 2.0835Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default HealthAndSafetyIcon;
