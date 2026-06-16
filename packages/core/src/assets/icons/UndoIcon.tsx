import React from 'react';

export interface UndoIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const UndoIcon = ({ size, ...props }: UndoIconProps) => {
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
      
<path d="M12.7761 8.85417C10.0157 8.85417 7.51571 9.88542 5.58862 11.5625L1.83862 7.8125V17.1875H11.2136L7.44279 13.4167C8.89071 12.2083 10.7345 11.4583 12.7761 11.4583C16.4636 11.4583 19.599 13.8646 20.6928 17.1875L23.1615 16.375C21.7136 12.0104 17.6199 8.85417 12.7761 8.85417Z" fill="currentColor"/>
    </svg>
  );
};

export default UndoIcon;
