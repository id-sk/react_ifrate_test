import React from 'react';

export interface AirplaneTicketIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AirplaneTicketIcon = ({ size, ...props }: AirplaneTicketIconProps) => {
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
        d="M21.0312 4.16675H4.16659C3.02075 4.16675 2.09367 5.10425 2.09367 6.25008V10.4167C3.2395 10.4167 4.16659 11.3542 4.16659 12.5001C4.16659 13.6459 3.2395 14.5834 2.08325 14.5834V18.7501C2.08325 19.8959 3.02075 20.8334 4.16659 20.8334H20.8333C21.9791 20.8334 22.9166 19.8959 22.9166 18.7501V6.25008C22.9166 5.10425 22.0728 4.16675 21.0312 4.16675ZM18.4687 13.8542L9.2395 16.3126L7.51034 13.3126L8.47909 13.0522L9.79159 14.0834L12.2812 13.4167L9.78117 9.08342L11.2395 8.68758L15.4166 12.5834L17.9583 11.9063C18.4895 11.7605 19.0416 12.0834 19.1874 12.6147C19.3228 13.1459 19.0103 13.698 18.4687 13.8542Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default AirplaneTicketIcon;
