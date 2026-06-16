import React from 'react';

export interface PowerIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PowerIcon = ({ size, ...props }: PowerIconProps) => {
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
      
<path d="M16.6771 7.29167L16.6667 3.125H14.5833V7.29167H10.4167V3.125H8.33333V7.29167H8.32292C7.29167 7.28125 6.25 8.32292 6.25 9.36458V15.0833L9.89583 18.75V21.875H15.1042V18.75L18.75 15.0937V9.36458C18.75 8.32292 17.7083 7.28125 16.6771 7.29167Z" fill="currentColor"/>
    </svg>
  );
};

export default PowerIcon;
