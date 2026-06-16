import React from 'react';

export interface ConnectingAirportsIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ConnectingAirportsIcon = ({ size, ...props }: ConnectingAirportsIconProps) => {
  return (
    <svg
      width={size || "1em"}
      height={size || "1em"}
      viewBox="0 0 25 25"
      fill="none"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      
<path d="M16.0416 17.7085L17.3958 22.2918H16.25L13.5416 17.7085H10.4166C9.84371 17.7085 9.37496 17.2397 9.37496 16.6668C9.37496 16.0939 9.84371 15.6252 10.4166 15.6252H13.5416L16.25 11.0418H17.3958L16.0416 15.6252H19.0104L19.7916 14.5835H20.8333L20.2083 16.6668L20.8333 18.7502H19.7916L19.0104 17.7085H16.0416ZM5.98954 7.29183L5.20829 6.25016H4.16663L4.79163 8.3335L4.16663 10.4168H5.20829L5.98954 9.37516H8.95829L7.60413 13.9585H8.74996L11.4583 9.37516H14.5833C15.1562 9.37516 15.625 8.90641 15.625 8.3335C15.625 7.76058 15.1562 7.29183 14.5833 7.29183H11.4583L8.74996 2.7085H7.60413L8.95829 7.29183H5.98954Z" fill="currentColor"/>
    </svg>
  );
};

export default ConnectingAirportsIcon;
