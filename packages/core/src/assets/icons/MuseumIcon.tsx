import React from 'react';

export interface MuseumIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MuseumIcon = ({ size, ...props }: MuseumIconProps) => {
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
        d="M22.9166 11.4585V9.37516L12.4999 2.0835L2.08325 9.37516V11.4585H4.16659V20.8335H2.08325V22.9168H22.9166V20.8335H20.8333V11.4585H22.9166ZM16.6666 18.7502H14.5833V14.5835L12.4999 17.7085L10.4166 14.5835V18.7502H8.33325V11.4585H10.4166L12.4999 14.5835L14.5833 11.4585H16.6666V18.7502Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MuseumIcon;
