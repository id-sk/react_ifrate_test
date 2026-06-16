import React from 'react';

export interface LightbulbCircleIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LightbulbCircleIcon = ({ size, ...props }: LightbulbCircleIconProps) => {
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
      
<path d="M12.4999 2.08337C6.74992 2.08337 2.08325 6.75004 2.08325 12.5C2.08325 18.25 6.74992 22.9167 12.4999 22.9167C18.2499 22.9167 22.9166 18.25 22.9166 12.5C22.9166 6.75004 18.2499 2.08337 12.4999 2.08337ZM12.4999 19.7917C11.6353 19.7917 10.9374 19.0938 10.9374 18.2292H14.0624C14.0624 19.0938 13.3645 19.7917 12.4999 19.7917ZM15.6249 17.1875H9.37492V15.625H15.6249V17.1875ZM15.5937 14.5834H9.40617C8.12492 13.6355 7.29159 12.125 7.29159 10.4167C7.29159 7.54171 9.62492 5.20837 12.4999 5.20837C15.3749 5.20837 17.7083 7.54171 17.7083 10.4167C17.7083 12.125 16.8749 13.6355 15.5937 14.5834Z" fill="currentColor"/>
    </svg>
  );
};

export default LightbulbCircleIcon;
