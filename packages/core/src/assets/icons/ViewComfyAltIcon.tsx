import React from 'react';

export interface ViewComfyAltIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ViewComfyAltIcon = ({ size, ...props }: ViewComfyAltIconProps) => {
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
      
<path d="M20.8333 4.16663H4.16659C3.02075 4.16663 2.08325 5.10413 2.08325 6.24996V18.75C2.08325 19.8958 3.02075 20.8333 4.16659 20.8333H20.8333C21.9791 20.8333 22.9166 19.8958 22.9166 18.75V6.24996C22.9166 5.10413 21.9791 4.16663 20.8333 4.16663ZM11.4583 17.7083H7.29159V13.5416H11.4583V17.7083ZM11.4583 11.4583H7.29159V7.29163H11.4583V11.4583ZM17.7083 17.7083H13.5416V13.5416H17.7083V17.7083ZM17.7083 11.4583H13.5416V7.29163H17.7083V11.4583Z" fill="currentColor"/>
    </svg>
  );
};

export default ViewComfyAltIcon;
