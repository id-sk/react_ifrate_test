import React from 'react';

export interface FormatListBulletedIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatListBulletedIcon = ({ size, ...props }: FormatListBulletedIconProps) => {
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
      
<path d="M4.427 10.9375C3.56242 10.9375 2.8645 11.6354 2.8645 12.5C2.8645 13.3646 3.56242 14.0625 4.427 14.0625C5.29159 14.0625 5.9895 13.3646 5.9895 12.5C5.9895 11.6354 5.29159 10.9375 4.427 10.9375ZM4.427 4.6875C3.56242 4.6875 2.8645 5.38542 2.8645 6.25C2.8645 7.11458 3.56242 7.8125 4.427 7.8125C5.29159 7.8125 5.9895 7.11458 5.9895 6.25C5.9895 5.38542 5.29159 4.6875 4.427 4.6875ZM4.427 17.1875C3.56242 17.1875 2.8645 17.8958 2.8645 18.75C2.8645 19.6042 3.57284 20.3125 4.427 20.3125C5.28117 20.3125 5.9895 19.6042 5.9895 18.75C5.9895 17.8958 5.29159 17.1875 4.427 17.1875ZM7.552 19.7917H22.1353V17.7083H7.552V19.7917ZM7.552 13.5417H22.1353V11.4583H7.552V13.5417ZM7.552 5.20833V7.29167H22.1353V5.20833H7.552Z" fill="currentColor"/>
    </svg>
  );
};

export default FormatListBulletedIcon;
