import React from 'react';

export interface ReadMoreIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ReadMoreIcon = ({ size, ...props }: ReadMoreIconProps) => {
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
      
<path d="M22.9166 7.29175H13.5416V9.37508H22.9166V7.29175Z" fill="currentColor"/>
<path d="M22.9166 15.6251H13.5416V17.7084H22.9166V15.6251Z" fill="currentColor"/>
<path d="M22.9166 11.4584H16.6666V13.5417H22.9166V11.4584Z" fill="currentColor"/>
<path d="M13.5416 12.5001L8.33325 7.29175V11.4584H2.08325V13.5417H8.33325V17.7084L13.5416 12.5001Z" fill="currentColor"/>
    </svg>
  );
};

export default ReadMoreIcon;
