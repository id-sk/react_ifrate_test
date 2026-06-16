import React from 'react';

export interface WorkIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const WorkIcon = ({ size, ...props }: WorkIconProps) => {
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
      
<path d="M20.8333 6.77079H16.6666V4.68746C16.6666 3.53121 15.7395 2.60413 14.5833 2.60413H10.4166C9.26034 2.60413 8.33325 3.53121 8.33325 4.68746V6.77079H4.16659C3.01034 6.77079 2.09367 7.69788 2.09367 8.85413L2.08325 20.3125C2.08325 21.4687 3.01034 22.3958 4.16659 22.3958H20.8333C21.9895 22.3958 22.9166 21.4687 22.9166 20.3125V8.85413C22.9166 7.69788 21.9895 6.77079 20.8333 6.77079ZM14.5833 6.77079H10.4166V4.68746H14.5833V6.77079Z" fill="currentColor"/>
    </svg>
  );
};

export default WorkIcon;
