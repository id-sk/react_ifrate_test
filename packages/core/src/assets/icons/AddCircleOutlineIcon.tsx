import React from 'react';

export interface AddCircleOutlineIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AddCircleOutlineIcon = ({ size, ...props }: AddCircleOutlineIconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.5416 7.29159H11.4583V11.4583H7.29159V13.5416H11.4583V17.7083H13.5416V13.5416H17.7083V11.4583H13.5416V7.29159ZM12.4999 2.08325C6.74992 2.08325 2.08325 6.74992 2.08325 12.4999C2.08325 18.2499 6.74992 22.9166 12.4999 22.9166C18.2499 22.9166 22.9166 18.2499 22.9166 12.4999C22.9166 6.74992 18.2499 2.08325 12.4999 2.08325ZM12.4999 20.8333C7.90617 20.8333 4.16659 17.0937 4.16659 12.4999C4.16659 7.90617 7.90617 4.16659 12.4999 4.16659C17.0937 4.16659 20.8333 7.90617 20.8333 12.4999C20.8333 17.0937 17.0937 20.8333 12.4999 20.8333Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default AddCircleOutlineIcon;
