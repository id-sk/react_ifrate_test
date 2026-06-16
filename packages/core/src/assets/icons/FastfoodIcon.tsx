import React from 'react';

export interface FastfoodIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FastfoodIcon = ({ size, ...props }: FastfoodIconProps) => {
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
      
<path d="M18.8126 23.9531H20.5417C21.4167 23.9531 22.1355 23.2865 22.2397 22.4323L23.9584 5.26562H18.7501V1.04688H16.698V5.26562H11.5209L11.8334 7.70312C13.6147 8.19271 15.2813 9.07812 16.2813 10.0573C17.7813 11.5365 18.8126 13.0677 18.8126 15.5677V23.9531ZM1.04175 22.9115V21.8802H16.698V22.9115C16.698 23.4844 16.2292 23.9531 15.6459 23.9531H2.09383C1.5105 23.9531 1.04175 23.4844 1.04175 22.9115ZM16.698 15.6198C16.698 7.28646 1.04175 7.28646 1.04175 15.6198H16.698ZM1.06258 17.7135H16.6876V19.7969H1.06258V17.7135Z" fill="currentColor"/>
    </svg>
  );
};

export default FastfoodIcon;
