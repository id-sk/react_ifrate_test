import React from 'react';

export interface CalendarTodayIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CalendarTodayIcon = ({ size, ...props }: CalendarTodayIconProps) => {
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
      
<path d="M20.8333 3.12502H19.7916V1.04169H17.7083V3.12502H7.29159V1.04169H5.20825V3.12502H4.16659C3.02075 3.12502 2.08325 4.06252 2.08325 5.20835V21.875C2.08325 23.0209 3.02075 23.9584 4.16659 23.9584H20.8333C21.9791 23.9584 22.9166 23.0209 22.9166 21.875V5.20835C22.9166 4.06252 21.9791 3.12502 20.8333 3.12502ZM20.8333 21.875H4.16659V8.33335H20.8333V21.875Z" fill="currentColor"/>
    </svg>
  );
};

export default CalendarTodayIcon;
