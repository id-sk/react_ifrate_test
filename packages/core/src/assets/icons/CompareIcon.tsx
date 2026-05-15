import React from 'react';

export interface CompareIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CompareIcon = ({ size, ...props }: CompareIconProps) => {
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
        d="M10.4167 3.12484H5.20833C4.0625 3.12484 3.125 4.06234 3.125 5.20817V19.7915C3.125 20.9373 4.0625 21.8748 5.20833 21.8748H10.4167V23.9582H12.5V1.0415H10.4167V3.12484ZM10.4167 18.7498H5.20833L10.4167 12.4998V18.7498ZM19.7917 3.12484H14.5833V5.20817H19.7917V18.7498L14.5833 12.4998V21.8748H19.7917C20.9375 21.8748 21.875 20.9373 21.875 19.7915V5.20817C21.875 4.06234 20.9375 3.12484 19.7917 3.12484Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CompareIcon;
