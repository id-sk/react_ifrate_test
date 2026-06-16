import React from 'react';

export interface Man4IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Man4Icon = ({ size, ...props }: Man4IconProps) => {
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
      
<path d="M14.323 7.29183H10.6771C9.41673 7.29183 8.44798 8.40641 8.61464 9.646L10.4167 22.9168H14.5834L16.3855 9.646C16.5521 8.40641 15.5834 7.29183 14.323 7.29183Z" fill="currentColor"/>
<path d="M12.5001 6.25016C13.6507 6.25016 14.5834 5.31742 14.5834 4.16683C14.5834 3.01624 13.6507 2.0835 12.5001 2.0835C11.3495 2.0835 10.4167 3.01624 10.4167 4.16683C10.4167 5.31742 11.3495 6.25016 12.5001 6.25016Z" fill="currentColor"/>
    </svg>
  );
};

export default Man4Icon;
