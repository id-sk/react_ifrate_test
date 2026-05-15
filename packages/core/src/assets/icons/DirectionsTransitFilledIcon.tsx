import React from 'react';

export interface DirectionsTransitFilledIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DirectionsTransitFilledIcon = ({ size, ...props }: DirectionsTransitFilledIconProps) => {
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
        d="M12.5001 2.604C8.33341 2.604 4.16675 3.12484 4.16675 6.77067V16.6665C4.16675 18.6769 5.80216 20.3123 7.81258 20.3123L6.25008 21.354V22.3957H18.7501V21.354L17.1876 20.3123C19.198 20.3123 20.8334 18.6769 20.8334 16.6665V6.77067C20.8334 3.12484 17.1042 2.604 12.5001 2.604ZM8.85425 17.1873C7.98966 17.1873 7.29175 16.4894 7.29175 15.6248C7.29175 14.7603 7.98966 14.0623 8.85425 14.0623C9.71883 14.0623 10.4167 14.7603 10.4167 15.6248C10.4167 16.4894 9.71883 17.1873 8.85425 17.1873ZM11.4584 10.9373H6.25008V7.81234H11.4584V10.9373ZM16.1459 17.1873C15.2813 17.1873 14.5834 16.4894 14.5834 15.6248C14.5834 14.7603 15.2813 14.0623 16.1459 14.0623C17.0105 14.0623 17.7084 14.7603 17.7084 15.6248C17.7084 16.4894 17.0105 17.1873 16.1459 17.1873ZM18.7501 10.9373H13.5417V7.81234H18.7501V10.9373Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DirectionsTransitFilledIcon;
