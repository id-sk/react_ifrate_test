import React from 'react';

export interface CalendarViewDayIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CalendarViewDayIcon = ({ size, ...props }: CalendarViewDayIconProps) => {
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
      
<path d="M3.125 17.1875H21.875V19.2709H3.125V17.1875ZM3.125 9.89585H21.875V15.1042H3.125V9.89585ZM3.125 5.72919H21.875V7.81252H3.125V5.72919Z" fill="currentColor"/>
    </svg>
  );
};

export default CalendarViewDayIcon;
