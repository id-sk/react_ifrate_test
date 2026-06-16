import React from 'react';

export interface CoPresentIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CoPresentIcon = ({ size, ...props }: CoPresentIconProps) => {
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
      
<path d="M21.8751 2.60425H3.12508C1.97925 2.60425 1.04175 3.54175 1.04175 4.68758V13.0209H3.12508V4.68758H21.8751V21.3542C23.0209 21.3542 23.9584 20.4167 23.9584 19.2709V4.68758C23.9584 3.54175 23.0209 2.60425 21.8751 2.60425Z" fill="currentColor"/>
<path d="M9.37508 14.0626C11.6763 14.0626 13.5417 12.1971 13.5417 9.89591C13.5417 7.59473 11.6763 5.72925 9.37508 5.72925C7.07389 5.72925 5.20841 7.59473 5.20841 9.89591C5.20841 12.1971 7.07389 14.0626 9.37508 14.0626Z" fill="currentColor"/>
<path d="M16.0313 16.7292C14.2813 15.8334 12.0105 15.1042 9.37508 15.1042C6.73966 15.1042 4.46883 15.8334 2.71883 16.7292C1.67716 17.2605 1.04175 18.3334 1.04175 19.5001V22.3959H17.7084V19.5001C17.7084 18.3334 17.073 17.2605 16.0313 16.7292Z" fill="currentColor"/>
    </svg>
  );
};

export default CoPresentIcon;
