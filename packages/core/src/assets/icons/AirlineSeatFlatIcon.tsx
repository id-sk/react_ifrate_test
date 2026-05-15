import React from 'react';

export interface AirlineSeatFlatIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AirlineSeatFlatIcon = ({ size, ...props }: AirlineSeatFlatIconProps) => {
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
        d="M22.9166 10.9377V13.021H9.37492V6.771H18.7499C21.052 6.771 22.9166 8.63558 22.9166 10.9377ZM2.08325 14.0627V16.146H8.33325V18.2293H16.6666V16.146H22.9166V14.0627H2.08325ZM7.43742 12.0835C8.64575 10.8439 8.62492 8.87516 7.39575 7.66683C6.15617 6.4585 4.18742 6.47933 2.97909 7.7085C1.77075 8.94808 1.79159 10.9168 3.02075 12.1252C4.26034 13.3335 6.22909 13.3127 7.43742 12.0835Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default AirlineSeatFlatIcon;
