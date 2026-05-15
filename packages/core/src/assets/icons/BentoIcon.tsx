import React from 'react';

export interface BentoIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const BentoIcon = ({ size, ...props }: BentoIconProps) => {
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
        d="M16.6666 11.4585V5.2085H20.8333C21.9791 5.2085 22.9166 6.146 22.9166 7.29183V11.4585H16.6666ZM20.8333 19.7918C21.9791 19.7918 22.9166 18.8543 22.9166 17.7085V13.5418H16.6666V19.7918H20.8333ZM14.5833 5.2085V19.7918H4.16659C3.02075 19.7918 2.08325 18.8543 2.08325 17.7085V7.29183C2.08325 6.146 3.02075 5.2085 4.16659 5.2085H14.5833ZM9.89575 12.5002C9.89575 11.6356 9.19784 10.9377 8.33325 10.9377C7.46867 10.9377 6.77075 11.6356 6.77075 12.5002C6.77075 13.3647 7.46867 14.0627 8.33325 14.0627C9.19784 14.0627 9.89575 13.3647 9.89575 12.5002Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default BentoIcon;
