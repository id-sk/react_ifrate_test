import React from 'react';

export interface CompareArrowsIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CompareArrowsIcon = ({ size, ...props }: CompareArrowsIconProps) => {
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
      
<path d="M9.38534 14.5833H2.08325V16.6666H9.38534V19.7916L13.5416 15.625L9.38534 11.4583V14.5833ZM15.6145 13.5416V10.4166H22.9166V8.33331H15.6145V5.20831L11.4583 9.37498L15.6145 13.5416Z" fill="currentColor"/>
    </svg>
  );
};

export default CompareArrowsIcon;
