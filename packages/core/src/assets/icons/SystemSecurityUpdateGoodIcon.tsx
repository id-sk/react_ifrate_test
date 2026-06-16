import React from 'react';

export interface SystemSecurityUpdateGoodIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SystemSecurityUpdateGoodIcon = ({ size, ...props }: SystemSecurityUpdateGoodIconProps) => {
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
      
<path d="M17.7084 1.04175H7.29171C6.14587 1.04175 5.20837 1.97925 5.20837 3.12508V21.8751C5.20837 23.0209 6.14587 23.9584 7.29171 23.9584H17.7084C18.8542 23.9584 19.7917 23.0209 19.7917 21.8751V3.12508C19.7917 1.97925 18.8542 1.04175 17.7084 1.04175ZM17.7084 18.7501H7.29171V6.25008H17.7084V18.7501ZM16.6667 10.4688L15.198 9.00008L11.5105 12.6876L10.0417 11.2188L8.57296 12.6876L11.5105 15.6251L16.6667 10.4688Z" fill="currentColor"/>
    </svg>
  );
};

export default SystemSecurityUpdateGoodIcon;
