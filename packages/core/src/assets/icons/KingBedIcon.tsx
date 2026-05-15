import React from 'react';

export interface KingBedIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const KingBedIcon = ({ size, ...props }: KingBedIconProps) => {
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
        d="M20.8333 10.4168V7.29183C20.8333 6.146 19.8958 5.2085 18.7499 5.2085H6.24992C5.10409 5.2085 4.16659 6.146 4.16659 7.29183V10.4168C3.02075 10.4168 2.08325 11.3543 2.08325 12.5002V17.7085H3.46867L4.16659 19.7918H5.20825L5.90617 17.7085H19.1041L19.7916 19.7918H20.8333L21.5312 17.7085H22.9166V12.5002C22.9166 11.3543 21.9791 10.4168 20.8333 10.4168ZM11.4583 10.4168H6.24992V7.29183H11.4583V10.4168ZM18.7499 10.4168H13.5416V7.29183H18.7499V10.4168Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KingBedIcon;
