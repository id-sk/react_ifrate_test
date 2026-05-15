import React from 'react';

export interface CloudUploadIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CloudUploadIcon = ({ size, ...props }: CloudUploadIconProps) => {
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
        d="M20.1562 10.4584C19.4479 6.86466 16.2917 4.16675 12.5 4.16675C9.48958 4.16675 6.875 5.87508 5.57292 8.37508C2.4375 8.70841 0 11.3647 0 14.5834C0 18.0313 2.80208 20.8334 6.25 20.8334H19.7917C22.6667 20.8334 25 18.5001 25 15.6251C25 12.8751 22.8646 10.6459 20.1562 10.4584ZM14.5833 13.5417V17.7084H10.4167V13.5417H7.29167L12.5 8.33341L17.7083 13.5417H14.5833Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CloudUploadIcon;
