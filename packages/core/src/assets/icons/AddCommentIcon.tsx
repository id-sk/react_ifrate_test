import React from 'react';

export interface AddCommentIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AddCommentIcon = ({ size, ...props }: AddCommentIconProps) => {
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
      
<path d="M22.9062 4.16659C22.9062 3.02075 21.9791 2.08325 20.8333 2.08325H4.16659C3.02075 2.08325 2.08325 3.02075 2.08325 4.16659V16.6666C2.08325 17.8124 3.02075 18.7499 4.16659 18.7499H18.7499L22.9166 22.9166L22.9062 4.16659ZM17.7083 11.4583H13.5416V15.6249H11.4583V11.4583H7.29159V9.37492H11.4583V5.20825H13.5416V9.37492H17.7083V11.4583Z" fill="currentColor"/>
    </svg>
  );
};

export default AddCommentIcon;
