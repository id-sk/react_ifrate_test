import React from 'react';

export interface SwapHorizontalCircleIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SwapHorizontalCircleIcon = ({ size, ...props }: SwapHorizontalCircleIconProps) => {
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
        d="M22.9166 12.5C22.9166 6.75004 18.2499 2.08337 12.4999 2.08337C6.74992 2.08337 2.08325 6.75004 2.08325 12.5C2.08325 18.25 6.74992 22.9167 12.4999 22.9167C18.2499 22.9167 22.9166 18.25 22.9166 12.5ZM15.6249 6.77087L19.2708 10.4167L15.6249 14.0625V11.4584H11.4583V9.37504H15.6249V6.77087ZM9.37492 18.2292L5.72909 14.5834L9.37492 10.9375V13.5417H13.5416V15.625H9.37492V18.2292Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SwapHorizontalCircleIcon;
