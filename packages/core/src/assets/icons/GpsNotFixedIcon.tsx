import React from 'react';

export interface GpsNotFixedIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const GpsNotFixedIcon = ({ size, ...props }: GpsNotFixedIconProps) => {
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
        d="M21.8126 11.4584C21.3334 7.11466 17.8855 3.66675 13.5417 3.18758V1.04175H11.4584V3.18758C7.11466 3.66675 3.66675 7.11466 3.18758 11.4584H1.04175V13.5417H3.18758C3.66675 17.8855 7.11466 21.3334 11.4584 21.8126V23.9584H13.5417V21.8126C17.8855 21.3334 21.3334 17.8855 21.8126 13.5417H23.9584V11.4584H21.8126ZM12.5001 19.7917C8.46883 19.7917 5.20841 16.5313 5.20841 12.5001C5.20841 8.46883 8.46883 5.20841 12.5001 5.20841C16.5313 5.20841 19.7917 8.46883 19.7917 12.5001C19.7917 16.5313 16.5313 19.7917 12.5001 19.7917Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default GpsNotFixedIcon;
