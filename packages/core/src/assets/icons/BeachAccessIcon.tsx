import React from 'react';

export interface BeachAccessIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const BeachAccessIcon = ({ size, ...props }: BeachAccessIconProps) => {
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
      
<path d="M13.6749 15.1659L15.1644 13.6763L21.8728 20.3877L20.3863 21.8742L13.6749 15.1659ZM18.1467 9.19711L21.1259 6.21795C17.0113 2.10336 10.3447 2.09295 6.23007 6.19711C10.3238 4.84295 14.8863 5.9367 18.1467 9.19711ZM6.19882 6.22836C2.09466 10.3429 2.10507 17.0096 6.21966 21.1242L9.19882 18.145C5.93841 14.8846 4.84466 10.3221 6.19882 6.22836ZM6.21966 6.20753L6.20924 6.21795C5.81341 9.35336 7.42799 13.3846 10.6884 16.6554L16.6572 10.6867C13.3967 7.42628 9.35507 5.8117 6.21966 6.20753Z" fill="currentColor"/>
    </svg>
  );
};

export default BeachAccessIcon;
