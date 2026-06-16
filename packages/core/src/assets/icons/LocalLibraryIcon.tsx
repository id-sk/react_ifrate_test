import React from 'react';

export interface LocalLibraryIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LocalLibraryIcon = ({ size, ...props }: LocalLibraryIconProps) => {
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
      
<path d="M12.5 11.7448C10.0417 9.45313 6.75 8.04688 3.125 8.04688V19.5052C6.75 19.5052 10.0417 20.9115 12.5 23.2031C14.9583 20.9219 18.25 19.5052 21.875 19.5052V8.04688C18.25 8.04688 14.9583 9.45313 12.5 11.7448ZM12.5 8.04688C14.2292 8.04688 15.625 6.65104 15.625 4.92188C15.625 3.19271 14.2292 1.79688 12.5 1.79688C10.7708 1.79688 9.375 3.19271 9.375 4.92188C9.375 6.65104 10.7708 8.04688 12.5 8.04688Z" fill="currentColor"/>
    </svg>
  );
};

export default LocalLibraryIcon;
