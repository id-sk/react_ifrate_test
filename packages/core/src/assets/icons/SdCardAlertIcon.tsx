import React from 'react';

export interface SdCardAlertIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SdCardAlertIcon = ({ size, ...props }: SdCardAlertIconProps) => {
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
        d="M18.7501 2.0835H10.4167L4.18758 8.3335L4.16675 20.8335C4.16675 21.9793 5.10425 22.9168 6.25008 22.9168H18.7501C19.8959 22.9168 20.8334 21.9793 20.8334 20.8335V4.16683C20.8334 3.021 19.8959 2.0835 18.7501 2.0835ZM13.5417 17.7085H11.4584V15.6252H13.5417V17.7085ZM13.5417 13.5418H11.4584V8.3335H13.5417V13.5418Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SdCardAlertIcon;
