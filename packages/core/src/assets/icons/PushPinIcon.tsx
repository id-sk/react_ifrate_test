import React from 'react';

export interface PushPinIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PushPinIcon = ({ size, ...props }: PushPinIconProps) => {
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
      
<path fillRule="evenodd" clipRule="evenodd" d="M16.6666 9.37492V4.16659H17.7083C18.2812 4.16659 18.7499 3.69784 18.7499 3.12492C18.7499 2.552 18.2812 2.08325 17.7083 2.08325H7.29159C6.71867 2.08325 6.24992 2.552 6.24992 3.12492C6.24992 3.69784 6.71867 4.16659 7.29159 4.16659H8.33325V9.37492C8.33325 11.1041 6.93742 12.4999 5.20825 12.4999V14.5833H11.427V21.8749L12.4687 22.9166L13.5103 21.8749V14.5833H19.7916V12.4999C18.0624 12.4999 16.6666 11.1041 16.6666 9.37492Z" fill="currentColor"/>
    </svg>
  );
};

export default PushPinIcon;
