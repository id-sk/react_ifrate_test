import React from 'react';

export interface TripOriginIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TripOriginIcon = ({ size, ...props }: TripOriginIconProps) => {
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
        d="M2.08325 12.5002C2.08325 6.75016 6.74992 2.0835 12.4999 2.0835C18.2499 2.0835 22.9166 6.75016 22.9166 12.5002C22.9166 18.2502 18.2499 22.9168 12.4999 22.9168C6.74992 22.9168 2.08325 18.2502 2.08325 12.5002ZM12.4999 18.7502C15.9478 18.7502 18.7499 15.9481 18.7499 12.5002C18.7499 9.05225 15.9478 6.25016 12.4999 6.25016C9.052 6.25016 6.24992 9.05225 6.24992 12.5002C6.24992 15.9481 9.052 18.7502 12.4999 18.7502Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default TripOriginIcon;
