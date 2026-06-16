import React from 'react';

export interface LocationSearchingIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LocationSearchingIcon = ({ size, ...props }: LocationSearchingIconProps) => {
  return (
    <svg
      width={size || "1em"}
      height={size || "1em"}
      viewBox="0 0 25 25"
      fill="none"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      
<path d="M21.8125 11.4584C21.3333 7.11466 17.8854 3.66675 13.5416 3.18758V1.04175H11.4583V3.18758C7.11454 3.66675 3.66663 7.11466 3.18746 11.4584H1.04163V13.5417H3.18746C3.66663 17.8855 7.11454 21.3334 11.4583 21.8126V23.9584H13.5416V21.8126C17.8854 21.3334 21.3333 17.8855 21.8125 13.5417H23.9583V11.4584H21.8125ZM12.5 19.7917C8.46871 19.7917 5.20829 16.5313 5.20829 12.5001C5.20829 8.46883 8.46871 5.20841 12.5 5.20841C16.5312 5.20841 19.7916 8.46883 19.7916 12.5001C19.7916 16.5313 16.5312 19.7917 12.5 19.7917Z" fill="currentColor"/>
    </svg>
  );
};

export default LocationSearchingIcon;
