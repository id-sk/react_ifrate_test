import React from 'react';

export interface TempleHinduIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TempleHinduIcon = ({ size, ...props }: TempleHinduIconProps) => {
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
        d="M6.87492 11.9792H18.1249L17.1874 8.85417H7.81242L6.87492 11.9792Z"
        fill="currentColor"
      />
      <path
        d="M20.8333 11.9792V14.0625H4.16659V11.9792H2.08325V23.4375H10.4166V18.2292H14.5833V23.4375H22.9166V11.9792H20.8333Z"
        fill="currentColor"
      />
      <path
        d="M16.5624 6.77083L15.6249 3.64583V1.5625H13.5416V3.64583H11.427V1.5625H9.34367V3.77083L8.43742 6.77083H16.5624Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default TempleHinduIcon;
