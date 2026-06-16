import React from 'react';

export interface MarkunreadMailboxIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MarkunreadMailboxIcon = ({ size, ...props }: MarkunreadMailboxIconProps) => {
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
      
<path d="M20.8333 7.29163H10.4166V13.5416H8.33325V5.20829H14.5833V1.04163H6.24992V7.29163H4.16659C3.02075 7.29163 2.08325 8.22913 2.08325 9.37496V21.875C2.08325 23.0208 3.02075 23.9583 4.16659 23.9583H20.8333C21.9791 23.9583 22.9166 23.0208 22.9166 21.875V9.37496C22.9166 8.22913 21.9791 7.29163 20.8333 7.29163Z" fill="currentColor"/>
    </svg>
  );
};

export default MarkunreadMailboxIcon;
