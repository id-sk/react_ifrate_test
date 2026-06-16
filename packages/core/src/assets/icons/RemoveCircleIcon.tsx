import React from 'react';

export interface RemoveCircleIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const RemoveCircleIcon = ({ size, ...props }: RemoveCircleIconProps) => {
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
      
<path d="M12.5 2.08325C6.75004 2.08325 2.08337 6.74992 2.08337 12.4999C2.08337 18.2499 6.75004 22.9166 12.5 22.9166C18.25 22.9166 22.9167 18.2499 22.9167 12.4999C22.9167 6.74992 18.25 2.08325 12.5 2.08325ZM17.7084 13.5416H7.29171V11.4583H17.7084V13.5416Z" fill="currentColor"/>
    </svg>
  );
};

export default RemoveCircleIcon;
