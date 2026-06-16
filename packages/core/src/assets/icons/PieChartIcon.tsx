import React from 'react';

export interface PieChartIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PieChartIcon = ({ size, ...props }: PieChartIconProps) => {
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
      
<path d="M11.4583 2.08325V22.9166C6.177 22.3958 2.08325 17.927 2.08325 12.4999C2.08325 7.07284 6.177 2.60409 11.4583 2.08325ZM13.5728 2.08325V11.4478H22.9166C22.427 6.51034 18.4999 2.57284 13.5728 2.08325ZM13.5728 13.552V22.9166C18.5103 22.427 22.427 18.4895 22.9166 13.552H13.5728Z" fill="currentColor"/>
    </svg>
  );
};

export default PieChartIcon;
