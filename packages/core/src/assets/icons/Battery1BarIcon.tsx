import React from 'react';

export interface Battery1BarIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Battery1BarIcon = ({ size, ...props }: Battery1BarIconProps) => {
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
        d="M17.7084 5.20825V21.8749C17.7084 22.4478 17.2397 22.9166 16.6667 22.9166H8.33341C7.7605 22.9166 7.29175 22.4478 7.29175 21.8749V5.20825C7.29175 4.63534 7.7605 4.16659 8.33341 4.16659H10.4167V2.08325H14.5834V4.16659H16.6667C17.2397 4.16659 17.7084 4.63534 17.7084 5.20825ZM15.6251 6.24992H9.37508V18.7499H15.6251V6.24992Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Battery1BarIcon;
