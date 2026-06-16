import React from 'react';

export interface LocalConvenienceStoreIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LocalConvenienceStoreIcon = ({ size, ...props }: LocalConvenienceStoreIconProps) => {
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
      
<path d="M19.7916 7.2915V4.1665H5.20825V7.2915H2.08325V20.8332H10.4166V16.6665H14.5833V20.8332H22.9166V7.2915H19.7916ZM11.4583 10.4165H9.37492V11.4582H11.4583V12.4998H8.33325V9.37484H10.4166V8.33317H8.33325V7.2915H11.4583V10.4165ZM16.6666 12.4998H15.6249V10.4165H13.5416V7.2915H14.5833V9.37484H15.6249V7.2915H16.6666V12.4998Z" fill="currentColor"/>
    </svg>
  );
};

export default LocalConvenienceStoreIcon;
