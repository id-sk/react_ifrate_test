import React from 'react';

export interface GamesIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const GamesIcon = ({ size, ...props }: GamesIconProps) => {
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
      
<path d="M15.6249 7.81254V2.08337H9.37492V7.81254L12.4999 10.9375L15.6249 7.81254ZM7.81242 9.37504H2.08325V15.625H7.81242L10.9374 12.5L7.81242 9.37504ZM9.37492 17.1875V22.9167H15.6249V17.1875L12.4999 14.0625L9.37492 17.1875ZM17.1874 9.37504L14.0624 12.5L17.1874 15.625H22.9166V9.37504H17.1874Z" fill="currentColor"/>
    </svg>
  );
};

export default GamesIcon;
