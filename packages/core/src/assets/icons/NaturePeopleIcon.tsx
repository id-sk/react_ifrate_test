import React from 'react';

export interface NaturePeopleIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const NaturePeopleIcon = ({ size, ...props }: NaturePeopleIconProps) => {
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
      
<path d="M23.0053 9.46354C23.0053 5.43229 19.7449 2.17188 15.7136 2.17188C11.6824 2.17188 8.42196 5.43229 8.42196 9.46354C8.42196 13.0781 11.047 16.0677 14.4949 16.6406V20.7448H6.16154V17.6198H7.20321V13.4531C7.20321 12.8802 6.73446 12.4115 6.16154 12.4115H3.03654C2.46362 12.4115 1.99487 12.8802 1.99487 13.4531V17.6198H3.03654V22.8281H19.7032V20.7448H16.5782V16.7031C20.1928 16.276 23.0053 13.2031 23.0053 9.46354ZM4.59904 11.3698C5.46362 11.3698 6.16154 10.6719 6.16154 9.80729C6.16154 8.94271 5.46362 8.24479 4.59904 8.24479C3.73446 8.24479 3.03654 8.94271 3.03654 9.80729C3.03654 10.6719 3.73446 11.3698 4.59904 11.3698Z" fill="currentColor"/>
    </svg>
  );
};

export default NaturePeopleIcon;
