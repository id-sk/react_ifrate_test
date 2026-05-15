import React from 'react';

export interface ChecklistIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ChecklistIcon = ({ size, ...props }: ChecklistIconProps) => {
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
        d="M22.9167 7.84904H13.5417V9.93237H22.9167V7.84904ZM22.9167 16.1824H13.5417V18.2657H22.9167V16.1824ZM5.77087 12.0157L2.08337 8.32821L3.55212 6.85946L5.76046 9.06779L10.1771 4.65112L11.6459 6.11987L5.77087 12.0157ZM5.77087 20.349L2.08337 16.6615L3.55212 15.1928L5.76046 17.4011L10.1771 12.9845L11.6459 14.4532L5.77087 20.349Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ChecklistIcon;
