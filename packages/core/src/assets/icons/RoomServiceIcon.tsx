import React from 'react';

export interface RoomServiceIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const RoomServiceIcon = ({ size, ...props }: RoomServiceIconProps) => {
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
        d="M2.08325 17.7085H22.9166V19.7918H2.08325V17.7085ZM14.4166 8.11475C14.5208 7.86475 14.5833 7.5835 14.5833 7.29183C14.5833 6.146 13.6458 5.2085 12.4999 5.2085C11.3541 5.2085 10.4166 6.146 10.4166 7.29183C10.4166 7.5835 10.4791 7.86475 10.5833 8.11475C6.51034 8.9585 3.40617 12.4272 3.12492 16.6668H21.8749C21.5937 12.4272 18.4895 8.9585 14.4166 8.11475Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default RoomServiceIcon;
