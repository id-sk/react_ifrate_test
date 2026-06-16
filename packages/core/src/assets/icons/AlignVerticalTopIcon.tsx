import React from 'react';

export interface AlignVerticalTopIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AlignVerticalTopIcon = ({ size, ...props }: AlignVerticalTopIconProps) => {
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
      
<path d="M22.9166 2.08325V4.16659H2.08325V2.08325H22.9166ZM7.29159 22.9166H10.4166V6.24992H7.29159V22.9166ZM14.5833 16.6666H17.7083V6.24992H14.5833V16.6666Z" fill="currentColor"/>
    </svg>
  );
};

export default AlignVerticalTopIcon;
