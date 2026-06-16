import React from 'react';

export interface TvOffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TvOffIcon = ({ size, ...props }: TvOffIconProps) => {
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
      
<path d="M1.04175 3.68734L2.6355 5.28109C1.71883 5.49984 1.04175 6.31234 1.04175 7.2915V19.7915C1.04175 20.9373 1.97925 21.8748 3.12508 21.8748H19.2292L21.3126 23.9582L22.6251 22.6353L2.36466 2.36442L1.04175 3.68734ZM3.12508 19.7915V7.2915H4.64591L17.1459 19.7915H3.12508ZM21.8751 5.20817H13.9792L17.4063 1.77067L16.6667 1.0415L12.5001 5.20817L8.33341 1.0415L7.60425 1.77067L11.0209 5.20817H7.83341L9.91675 7.2915H21.8751V19.2498L23.5938 20.9686C23.823 20.6353 23.9584 20.229 23.9584 19.7915V7.2915C23.9584 6.13525 23.0313 5.20817 21.8751 5.20817Z" fill="currentColor"/>
    </svg>
  );
};

export default TvOffIcon;
