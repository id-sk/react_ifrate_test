import React from 'react';

export interface KeyOffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const KeyOffIcon = ({ size, ...props }: KeyOffIconProps) => {
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
      
<path d="M17.6147 13.9426L17.7084 13.8489L19.7917 15.9322L23.9584 11.7239L21.8751 9.68221H13.3647L17.6147 13.9426ZM4.14591 6.35929C2.29175 7.44263 1.04175 9.46346 1.04175 11.7655C1.04175 15.2135 3.84383 18.0155 7.29175 18.0155C9.59383 18.0155 11.6147 16.7655 12.6876 14.901L20.5938 22.8072L22.0626 21.3385L2.92716 2.19263L1.448 3.66138L4.14591 6.35929ZM10.323 12.5364C9.97925 13.8801 8.75008 14.8905 7.29175 14.8905C5.573 14.8905 4.16675 13.4843 4.16675 11.7655C4.16675 10.3072 5.17717 9.07804 6.52091 8.73429L10.323 12.5364Z" fill="currentColor"/>
    </svg>
  );
};

export default KeyOffIcon;
