import React from 'react';

export interface FlightLandIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FlightLandIcon = ({ size, ...props }: FlightLandIconProps) => {
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
        d="M2.60425 20.3125H22.3959V22.3959H2.60425V20.3125ZM20.1459 17.0313C20.9792 17.25 21.8334 16.7604 22.0626 15.9271C22.2813 15.0938 21.7917 14.2396 20.9584 14.0104L15.4272 12.5313L12.5522 3.13544L10.5417 2.60419V11.2292L5.36466 9.84377L4.39591 7.4271L2.8855 7.02085V12.4063L20.1459 17.0313Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FlightLandIcon;
