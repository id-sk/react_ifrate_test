import React from 'react';

export interface BookIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const BookIcon = ({ size, ...props }: BookIconProps) => {
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
        d="M18.7501 2.08331H6.25008C5.10425 2.08331 4.16675 3.02081 4.16675 4.16665V20.8333C4.16675 21.9791 5.10425 22.9166 6.25008 22.9166H18.7501C19.8959 22.9166 20.8334 21.9791 20.8334 20.8333V4.16665C20.8334 3.02081 19.8959 2.08331 18.7501 2.08331ZM6.25008 4.16665H11.4584V12.5L8.85425 10.9375L6.25008 12.5V4.16665Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default BookIcon;
