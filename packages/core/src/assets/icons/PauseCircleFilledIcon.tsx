import React from 'react';

export interface PauseCircleFilledIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PauseCircleFilledIcon = ({ size, ...props }: PauseCircleFilledIconProps) => {
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
      
<path d="M12.4999 2.08337C6.74992 2.08337 2.08325 6.75004 2.08325 12.5C2.08325 18.25 6.74992 22.9167 12.4999 22.9167C18.2499 22.9167 22.9166 18.25 22.9166 12.5C22.9166 6.75004 18.2499 2.08337 12.4999 2.08337ZM11.4583 16.6667H9.37492V8.33337H11.4583V16.6667ZM15.6249 16.6667H13.5416V8.33337H15.6249V16.6667Z" fill="currentColor"/>
    </svg>
  );
};

export default PauseCircleFilledIcon;
