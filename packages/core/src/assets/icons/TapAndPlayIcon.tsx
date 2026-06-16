import React from 'react';

export interface TapAndPlayIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TapAndPlayIcon = ({ size, ...props }: TapAndPlayIconProps) => {
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
      
<path d="M3.64575 16.6665V18.7498C6.52075 18.7498 8.85409 21.0832 8.85409 23.9582H10.9374C10.9374 19.9269 7.677 16.6665 3.64575 16.6665ZM3.64575 20.8332V23.9582H6.77075C6.77075 22.229 5.37492 20.8332 3.64575 20.8332ZM3.64575 12.4998V14.5832C8.82284 14.5832 13.0208 18.7811 13.0208 23.9582H15.1041C15.1041 17.6248 9.97909 12.4998 3.64575 12.4998ZM19.2708 1.05192L8.85409 1.0415C7.70825 1.0415 6.77075 1.979 6.77075 3.12484V10.8019C7.4895 10.9686 8.18742 11.1873 8.85409 11.4686V5.20817H19.2708V18.7498H16.1145C16.6562 20.0519 16.9895 21.4478 17.1041 22.9165H19.2708C20.4166 22.9165 21.3541 21.979 21.3541 20.8332V3.12484C21.3541 1.979 20.4166 1.05192 19.2708 1.05192Z" fill="currentColor"/>
    </svg>
  );
};

export default TapAndPlayIcon;
