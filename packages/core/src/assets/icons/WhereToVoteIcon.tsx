import React from 'react';

export interface WhereToVoteIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const WhereToVoteIcon = ({ size, ...props }: WhereToVoteIconProps) => {
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
        d="M12.4999 2.08325C16.5208 2.08325 19.7916 5.35409 19.7916 9.37492C19.7916 14.8437 12.4999 22.9166 12.4999 22.9166C12.4999 22.9166 5.20825 14.8437 5.20825 9.37492C5.20825 5.35409 8.47909 2.08325 12.4999 2.08325ZM10.9062 14.5833L17.7083 7.71867L16.2499 6.24992L10.9062 11.6458L8.74992 9.46867L7.29159 10.9374L10.9062 14.5833Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default WhereToVoteIcon;
