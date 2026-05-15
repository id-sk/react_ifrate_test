import React from 'react';

export interface LocalPharmacyIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LocalPharmacyIcon = ({ size, ...props }: LocalPharmacyIconProps) => {
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
        d="M21.875 6.25016H19.125L20.3125 2.97933L17.8646 2.0835L16.3437 6.25016H3.125V8.3335L5.20833 14.5835L3.125 20.8335V22.9168H21.875V20.8335L19.7917 14.5835L21.875 8.3335V6.25016ZM16.6667 15.6252H13.5417V18.7502H11.4583V15.6252H8.33333V13.5418H11.4583V10.4168H13.5417V13.5418H16.6667V15.6252Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default LocalPharmacyIcon;
