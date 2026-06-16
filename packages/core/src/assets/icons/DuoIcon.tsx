import React from 'react';

export interface DuoIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DuoIcon = ({ size, ...props }: DuoIconProps) => {
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
      
<path d="M20.8333 2.08325H12.4999C6.64575 2.08325 2.08325 6.93742 2.08325 12.7916C2.08325 18.2291 6.76034 22.9166 12.2083 22.9166C18.1145 22.9166 22.9166 18.3541 22.9166 12.4999V4.16659C22.9166 3.02075 21.9791 2.08325 20.8333 2.08325ZM17.7083 15.6249L14.5833 13.5416V15.6249H7.29159V9.37492H14.5833V11.4583L17.7083 9.37492V15.6249Z" fill="currentColor"/>
    </svg>
  );
};

export default DuoIcon;
