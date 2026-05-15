import React from 'react';

export interface FlightClassIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FlightClassIcon = ({ size, ...props }: FlightClassIconProps) => {
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
        d="M17.1876 3.646H15.1042C13.9584 3.646 13.0209 4.5835 13.0209 5.72933V10.9377C13.0209 12.0835 13.9584 13.021 15.1042 13.021H17.1876C18.3334 13.021 19.2709 12.0835 19.2709 10.9377V5.72933C19.2709 4.5835 18.3334 3.646 17.1876 3.646ZM10.4167 16.146H19.2709V18.2293H10.4063C9.48966 18.2293 8.67717 17.6252 8.40633 16.7397L5.72925 7.81266V3.646H7.81258V7.81266L10.4167 16.146ZM8.85425 19.271H19.2709V21.3543H8.85425V19.271Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FlightClassIcon;
