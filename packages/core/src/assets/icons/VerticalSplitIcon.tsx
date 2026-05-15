import React from 'react';

export interface VerticalSplitIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const VerticalSplitIcon = ({ size, ...props }: VerticalSplitIconProps) => {
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
        d="M3.125 15.625H11.4583V13.5417H3.125V15.625ZM3.125 19.7917H11.4583V17.7084H3.125V19.7917ZM3.125 11.4584H11.4583V9.37504H3.125V11.4584ZM3.125 5.20837V7.29171H11.4583V5.20837H3.125ZM13.5417 5.20837H21.875V19.7917H13.5417V5.20837Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default VerticalSplitIcon;
