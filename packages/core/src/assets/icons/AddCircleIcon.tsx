import React from 'react';

export interface AddCircleIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AddCircleIcon = ({ size, ...props }: AddCircleIconProps) => {
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
      
<path d="M12.4999 2.08325C6.74992 2.08325 2.08325 6.74992 2.08325 12.4999C2.08325 18.2499 6.74992 22.9166 12.4999 22.9166C18.2499 22.9166 22.9166 18.2499 22.9166 12.4999C22.9166 6.74992 18.2499 2.08325 12.4999 2.08325ZM17.7083 13.5416H13.5416V17.7083H11.4583V13.5416H7.29159V11.4583H11.4583V7.29159H13.5416V11.4583H17.7083V13.5416Z" fill="currentColor"/>
    </svg>
  );
};

export default AddCircleIcon;
