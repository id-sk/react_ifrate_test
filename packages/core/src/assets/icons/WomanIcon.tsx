import React from 'react';

export interface WomanIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const WomanIcon = ({ size, ...props }: WomanIconProps) => {
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
      
<path d="M14.5209 8.65641C14.1876 7.8335 13.3855 7.29183 12.5001 7.29183C11.6147 7.29183 10.8126 7.8335 10.4792 8.65641L7.29175 16.6668H10.4167V22.9168H14.5834V16.6668H17.7084L14.5209 8.65641Z" fill="currentColor"/>
<path d="M12.5001 6.25016C13.6507 6.25016 14.5834 5.31742 14.5834 4.16683C14.5834 3.01624 13.6507 2.0835 12.5001 2.0835C11.3495 2.0835 10.4167 3.01624 10.4167 4.16683C10.4167 5.31742 11.3495 6.25016 12.5001 6.25016Z" fill="currentColor"/>
    </svg>
  );
};

export default WomanIcon;
