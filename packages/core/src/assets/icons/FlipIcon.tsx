import React from 'react';

export interface FlipIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FlipIcon = ({ size, ...props }: FlipIconProps) => {
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
        d="M15.625 21.8748H17.7083V19.7915H15.625V21.8748ZM19.7917 9.37484H21.875V7.2915H19.7917V9.37484ZM3.125 5.20817V19.7915C3.125 20.9373 4.0625 21.8748 5.20833 21.8748H9.375V19.7915H5.20833V5.20817H9.375V3.12484H5.20833C4.0625 3.12484 3.125 4.06234 3.125 5.20817ZM19.7917 3.12484V5.20817H21.875C21.875 4.06234 20.9375 3.12484 19.7917 3.12484ZM11.4583 23.9582H13.5417V1.0415H11.4583V23.9582ZM19.7917 17.7082H21.875V15.6248H19.7917V17.7082ZM15.625 5.20817H17.7083V3.12484H15.625V5.20817ZM19.7917 13.5415H21.875V11.4582H19.7917V13.5415ZM19.7917 21.8748C20.9375 21.8748 21.875 20.9373 21.875 19.7915H19.7917V21.8748Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FlipIcon;
