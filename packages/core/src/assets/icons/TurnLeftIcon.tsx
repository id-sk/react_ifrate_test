import React from 'react';

export interface TurnLeftIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TurnLeftIcon = ({ size, ...props }: TurnLeftIconProps) => {
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
        d="M9.19783 10.4168L10.8541 12.0731L9.37492 13.5418L5.20825 9.37516L9.37492 5.2085L10.8437 6.67725L9.19783 8.3335H17.7083C18.8541 8.3335 19.7916 9.271 19.7916 10.4168V19.7918H17.7083V10.4168H9.19783Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default TurnLeftIcon;
