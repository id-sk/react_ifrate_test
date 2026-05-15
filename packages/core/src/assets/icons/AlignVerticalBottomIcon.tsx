import React from 'react';

export interface AlignVerticalBottomIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AlignVerticalBottomIcon = ({ size, ...props }: AlignVerticalBottomIconProps) => {
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
        d="M22.9166 22.9166H2.08325V20.8333H22.9166V22.9166ZM10.4166 2.08325H7.29159V18.7499H10.4166V2.08325ZM17.7083 8.33325H14.5833V18.7499H17.7083V8.33325Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default AlignVerticalBottomIcon;
