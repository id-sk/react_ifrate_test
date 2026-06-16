import React from 'react';

export interface ThermostatIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ThermostatIcon = ({ size, ...props }: ThermostatIconProps) => {
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
      
<path d="M15.6251 13.5416V5.20825C15.6251 3.47909 14.2292 2.08325 12.5001 2.08325C10.7709 2.08325 9.37508 3.47909 9.37508 5.20825V13.5416C8.11466 14.4895 7.29175 16.0103 7.29175 17.7083C7.29175 20.5833 9.62508 22.9166 12.5001 22.9166C15.3751 22.9166 17.7084 20.5833 17.7084 17.7083C17.7084 16.0103 16.8855 14.4895 15.6251 13.5416ZM11.4584 11.4583V5.20825C11.4584 4.63534 11.9272 4.16659 12.5001 4.16659C13.073 4.16659 13.5417 4.63534 13.5417 5.20825V6.24992H12.5001V7.29159H13.5417V9.37492H12.5001V10.4166H13.5417V11.4583H11.4584Z" fill="currentColor"/>
    </svg>
  );
};

export default ThermostatIcon;
