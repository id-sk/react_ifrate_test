import React from 'react';

export interface CabinIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CabinIcon = ({ size, ...props }: CabinIconProps) => {
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
        d="M10.4167 2.0835C10.4167 3.81266 9.02091 5.2085 7.29175 5.2085C6.71883 5.2085 6.25008 5.67725 6.25008 6.25016H4.16675C4.16675 4.521 5.56258 3.12516 7.29175 3.12516C7.86466 3.12516 8.33341 2.65641 8.33341 2.0835H10.4167ZM12.5001 4.16683L6.25008 8.93766V7.29183H4.16675V10.5314L1.04175 12.9168L2.30216 14.5731L4.16675 13.146V22.9168H20.8334V13.146L22.698 14.5627L23.9584 12.9168L12.5001 4.16683ZM14.5209 8.3335H10.4688L12.5001 6.79183L14.5209 8.3335ZM7.75008 10.4168H17.2501L18.7501 11.5627V12.5002H6.25008V11.5627L7.75008 10.4168ZM18.7501 14.5835V16.6668H6.25008V14.5835H18.7501ZM6.25008 20.8335V18.7502H18.7501V20.8335H6.25008Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CabinIcon;
