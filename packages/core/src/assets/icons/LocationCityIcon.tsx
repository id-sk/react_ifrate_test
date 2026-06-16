import React from 'react';

export interface LocationCityIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LocationCityIcon = ({ size, ...props }: LocationCityIconProps) => {
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
      
<path d="M15.625 11.979V5.729L12.5 2.604L9.375 5.729V7.81234H3.125V22.3957H21.875V11.979H15.625ZM7.29167 20.3123H5.20833V18.229H7.29167V20.3123ZM7.29167 16.1457H5.20833V14.0623H7.29167V16.1457ZM7.29167 11.979H5.20833V9.89567H7.29167V11.979ZM13.5417 20.3123H11.4583V18.229H13.5417V20.3123ZM13.5417 16.1457H11.4583V14.0623H13.5417V16.1457ZM13.5417 11.979H11.4583V9.89567H13.5417V11.979ZM13.5417 7.81234H11.4583V5.729H13.5417V7.81234ZM19.7917 20.3123H17.7083V18.229H19.7917V20.3123ZM19.7917 16.1457H17.7083V14.0623H19.7917V16.1457Z" fill="currentColor"/>
    </svg>
  );
};

export default LocationCityIcon;
