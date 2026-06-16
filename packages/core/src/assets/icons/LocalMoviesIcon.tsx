import React from 'react';

export interface LocalMoviesIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LocalMoviesIcon = ({ size, ...props }: LocalMoviesIconProps) => {
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
      
<path d="M18.7501 3.125V5.20833H16.6667V3.125H8.33341V5.20833H6.25008V3.125H4.16675V21.875H6.25008V19.7917H8.33341V21.875H16.6667V19.7917H18.7501V21.875H20.8334V3.125H18.7501ZM8.33341 17.7083H6.25008V15.625H8.33341V17.7083ZM8.33341 13.5417H6.25008V11.4583H8.33341V13.5417ZM8.33341 9.375H6.25008V7.29167H8.33341V9.375ZM18.7501 17.7083H16.6667V15.625H18.7501V17.7083ZM18.7501 13.5417H16.6667V11.4583H18.7501V13.5417ZM18.7501 9.375H16.6667V7.29167H18.7501V9.375Z" fill="currentColor"/>
    </svg>
  );
};

export default LocalMoviesIcon;
