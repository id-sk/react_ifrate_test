import React from 'react';

export interface EventSeatIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const EventSeatIcon = ({ size, ...props }: EventSeatIconProps) => {
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
      
<path d="M4.16659 21.875H7.29159V18.75H17.7083V21.875H20.8333V15.625H4.16659V21.875ZM19.7916 10.4167H22.9166V13.5417H19.7916V10.4167ZM2.08325 10.4167H5.20825V13.5417H2.08325V10.4167ZM17.7083 13.5417H7.29159V5.20833C7.29159 4.0625 8.22909 3.125 9.37492 3.125H15.6249C16.7708 3.125 17.7083 4.0625 17.7083 5.20833V13.5417Z" fill="currentColor"/>
    </svg>
  );
};

export default EventSeatIcon;
