import React from 'react';

export interface LocalDiningIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LocalDiningIcon = ({ size, ...props }: LocalDiningIconProps) => {
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
      
<path d="M8.12459 13.6754L11.0725 10.7275L3.76001 3.42539C2.13501 5.05039 2.13501 7.68581 3.76001 9.32122L8.12459 13.6754ZM15.1871 11.79C16.7808 12.5296 19.0204 12.0087 20.6767 10.3525C22.6663 8.36289 23.0517 5.50872 21.5204 3.97747C19.9996 2.45664 17.1454 2.83164 15.1454 4.82122C13.4892 6.47747 12.9683 8.71706 13.7079 10.3108L3.54126 20.4775L5.01001 21.9462L12.1871 14.79L19.3538 21.9566L20.8225 20.4879L13.6558 13.3212L15.1871 11.79Z" fill="currentColor"/>
    </svg>
  );
};

export default LocalDiningIcon;
