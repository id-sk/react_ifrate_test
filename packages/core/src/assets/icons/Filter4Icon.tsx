import React from 'react';

export interface Filter4IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Filter4Icon = ({ size, ...props }: Filter4IconProps) => {
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
      
<path d="M3.12496 5.20817H1.04163V21.8748C1.04163 23.0207 1.97913 23.9582 3.12496 23.9582H19.7916V21.8748H3.12496V5.20817ZM15.625 15.6248H17.7083V5.20817H15.625V9.37484H13.5416V5.20817H11.4583V11.4582H15.625V15.6248ZM21.875 1.0415H7.29163C6.14579 1.0415 5.20829 1.979 5.20829 3.12484V17.7082C5.20829 18.854 6.14579 19.7915 7.29163 19.7915H21.875C23.0208 19.7915 23.9583 18.854 23.9583 17.7082V3.12484C23.9583 1.979 23.0208 1.0415 21.875 1.0415ZM21.875 17.7082H7.29163V3.12484H21.875V17.7082Z" fill="currentColor"/>
    </svg>
  );
};

export default Filter4Icon;
