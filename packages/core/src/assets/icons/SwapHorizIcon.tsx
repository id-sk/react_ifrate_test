import React from 'react';

export interface SwapHorizIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SwapHorizIcon = ({ size, ...props }: SwapHorizIconProps) => {
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
        d="M7.28125 11.4584L3.125 15.625L7.28125 19.7917V16.6667H14.5833V14.5834H7.28125V11.4584ZM21.875 9.37504L17.7188 5.20837V8.33337H10.4167V10.4167H17.7188V13.5417L21.875 9.37504Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SwapHorizIcon;
