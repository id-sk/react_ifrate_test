import React from 'react';

export interface SecurityUpdateGoodIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SecurityUpdateGoodIcon = ({ size, ...props }: SecurityUpdateGoodIconProps) => {
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
      
<path d="M17.7083 1.04175H7.29159C6.14575 1.04175 5.20825 1.97925 5.20825 3.12508V21.8751C5.20825 23.0209 6.14575 23.9584 7.29159 23.9584H17.7083C18.8541 23.9584 19.7916 23.0209 19.7916 21.8751V3.12508C19.7916 1.97925 18.8541 1.04175 17.7083 1.04175ZM17.7083 18.7501H7.29159V6.25008H17.7083V18.7501ZM16.6666 10.4688L15.1978 9.00008L11.5103 12.6876L10.0416 11.2188L8.57283 12.6876L11.5103 15.6251L16.6666 10.4688Z" fill="currentColor"/>
    </svg>
  );
};

export default SecurityUpdateGoodIcon;
