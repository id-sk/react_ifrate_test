import React from 'react';

export interface WebIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const WebIcon = ({ size, ...props }: WebIconProps) => {
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
        d="M20.8333 4.16663H4.16659C3.02075 4.16663 2.09367 5.10413 2.09367 6.24996L2.08325 18.75C2.08325 19.8958 3.02075 20.8333 4.16659 20.8333H20.8333C21.9791 20.8333 22.9166 19.8958 22.9166 18.75V6.24996C22.9166 5.10413 21.9791 4.16663 20.8333 4.16663ZM15.6249 18.75H4.16659V14.5833H15.6249V18.75ZM15.6249 13.5416H4.16659V9.37496H15.6249V13.5416ZM20.8333 18.75H16.6666V9.37496H20.8333V18.75Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default WebIcon;
