import React from 'react';

export interface CircleIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CircleIcon = ({ size, ...props }: CircleIconProps) => {
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
        d="M12.4999 2.0835C6.7395 2.0835 2.08325 6.73975 2.08325 12.5002C2.08325 18.2606 6.7395 22.9168 12.4999 22.9168C18.2603 22.9168 22.9166 18.2606 22.9166 12.5002C22.9166 6.73975 18.2603 2.0835 12.4999 2.0835Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CircleIcon;
