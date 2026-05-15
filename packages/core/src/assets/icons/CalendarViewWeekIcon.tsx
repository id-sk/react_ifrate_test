import React from 'react';

export interface CalendarViewWeekIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CalendarViewWeekIcon = ({ size, ...props }: CalendarViewWeekIconProps) => {
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
        d="M20.8333 4.16669H4.16659C3.02075 4.16669 2.08325 5.10419 2.08325 6.25002V18.75C2.08325 19.8959 3.02075 20.8334 4.16659 20.8334H20.8333C21.9791 20.8334 22.9166 19.8959 22.9166 18.75V6.25002C22.9166 5.10419 21.9791 4.16669 20.8333 4.16669ZM13.5416 6.25002H16.1458V18.75H13.5416V6.25002ZM11.4583 18.75H8.85409V6.25002H11.4583V18.75ZM4.16659 6.25002H6.77075V18.75H4.16659V6.25002ZM20.8333 18.75H18.2291V6.25002H20.8333V18.75Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CalendarViewWeekIcon;
