import React from 'react';

export interface DescriptionIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DescriptionIcon = ({ size, ...props }: DescriptionIconProps) => {
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
        d="M14.5834 2.08331H6.25008C5.10425 2.08331 4.17716 3.02081 4.17716 4.16665L4.16675 20.8333C4.16675 21.9791 5.09383 22.9166 6.23966 22.9166H18.7501C19.8959 22.9166 20.8334 21.9791 20.8334 20.8333V8.33331L14.5834 2.08331ZM16.6667 18.75H8.33341V16.6666H16.6667V18.75ZM16.6667 14.5833H8.33341V12.5H16.6667V14.5833ZM13.5417 9.37498V3.64581L19.2709 9.37498H13.5417Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DescriptionIcon;
