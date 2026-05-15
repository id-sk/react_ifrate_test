import React from 'react';

export interface FlagCircleIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FlagCircleIcon = ({ size, ...props }: FlagCircleIconProps) => {
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
        d="M12.4999 2.08325C6.74992 2.08325 2.08325 6.74992 2.08325 12.4999C2.08325 18.2499 6.74992 22.9166 12.4999 22.9166C18.2499 22.9166 22.9166 18.2499 22.9166 12.4999C22.9166 6.74992 18.2499 2.08325 12.4999 2.08325ZM18.7499 15.6249H13.5416L12.4999 13.5416H9.89575V18.7499H8.33325V7.29159H14.5833L15.6249 9.37492H18.7499V15.6249Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FlagCircleIcon;
