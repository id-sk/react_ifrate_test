import React from 'react';

export interface AirlineSeatIndividualSuiteIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AirlineSeatIndividualSuiteIcon = ({
  size,
  ...props
}: AirlineSeatIndividualSuiteIconProps) => {
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
        d="M7.29175 13.5415C9.0105 13.5415 10.4167 12.1353 10.4167 10.4165C10.4167 8.69775 9.0105 7.2915 7.29175 7.2915C5.573 7.2915 4.16675 8.69775 4.16675 10.4165C4.16675 12.1353 5.573 13.5415 7.29175 13.5415ZM19.7917 7.2915H11.4584V14.5832H3.12508V7.2915H1.04175V17.7082H23.9584V11.4582C23.9584 9.15609 22.0938 7.2915 19.7917 7.2915Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default AirlineSeatIndividualSuiteIcon;
