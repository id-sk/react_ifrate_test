import React from 'react';

export interface MobileOffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MobileOffIcon = ({ size, ...props }: MobileOffIconProps) => {
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
        d="M3.15617 2.59383L1.83325 3.91675L5.4895 7.573V21.8751C5.4895 23.0209 6.427 23.9584 7.57284 23.9584H17.9895C19.052 23.9584 19.9166 23.1563 20.052 22.1355L21.8437 23.9272L23.1666 22.6042L3.15617 2.59383ZM7.57284 19.7917V9.65633L17.7083 19.7917H7.57284ZM17.9895 5.20841V14.7605L20.0728 16.8438V3.12508C20.0728 1.97925 19.1353 1.04175 17.9895 1.04175H7.57284C6.68742 1.04175 5.927 1.60425 5.62492 2.39591L8.43742 5.20841H17.9895Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MobileOffIcon;
