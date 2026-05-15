import React from 'react';

export interface SingleBedIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SingleBedIcon = ({ size, ...props }: SingleBedIconProps) => {
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
        d="M20.8334 12.5002C20.8334 11.3543 19.8959 10.4168 18.7501 10.4168V7.29183C18.7501 6.146 17.8126 5.2085 16.6667 5.2085H8.33341C7.18758 5.2085 6.25008 6.146 6.25008 7.29183V10.4168C5.10425 10.4168 4.16675 11.3543 4.16675 12.5002V17.7085H5.55216L6.25008 19.7918H7.29175L7.98966 17.7085H17.0209L17.7084 19.7918H18.7501L19.448 17.7085H20.8334V12.5002ZM16.6667 10.4168H13.5417V7.29183H16.6667V10.4168ZM8.33341 7.29183H11.4584V10.4168H8.33341V7.29183ZM6.25008 12.5002H18.7501V15.6252H6.25008V12.5002Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SingleBedIcon;
