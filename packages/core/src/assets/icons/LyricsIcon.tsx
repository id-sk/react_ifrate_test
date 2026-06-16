import React from 'react';

export interface LyricsIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LyricsIcon = ({ size, ...props }: LyricsIconProps) => {
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
      
<path d="M13.5416 9.89583C13.5416 7.77083 14.8333 5.94792 16.6666 5.13542V4.6875C16.6666 3.54167 15.7291 2.60417 14.5833 2.60417H3.12496C1.97913 2.60417 1.05204 3.54167 1.05204 4.6875L1.04163 23.4375L5.20829 19.2708H14.5833C15.7291 19.2708 16.6666 18.3333 16.6666 17.1875V14.6667C14.8333 13.8542 13.5416 12.0312 13.5416 9.89583ZM9.37496 15.1042H5.20829V13.0208H9.37496V15.1042ZM12.5 11.9792H5.20829V9.89583H12.5V11.9792ZM12.5 8.85417H5.20829V6.77083H12.5V8.85417Z" fill="currentColor"/>
<path d="M19.7916 6.95833C19.4687 6.84375 19.1145 6.77083 18.75 6.77083C17.0208 6.77083 15.625 8.16667 15.625 9.89583C15.625 11.625 17.0208 13.0208 18.75 13.0208C20.4791 13.0208 21.875 11.625 21.875 9.89583V3.64583H23.9583V1.5625H19.7916V6.95833Z" fill="currentColor"/>
    </svg>
  );
};

export default LyricsIcon;
