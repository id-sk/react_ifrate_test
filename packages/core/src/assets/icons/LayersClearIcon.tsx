import React from 'react';

export interface LayersClearIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LayersClearIcon = ({ size, ...props }: LayersClearIconProps) => {
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
        d="M20.6353 16.6198L21.8749 15.6615L20.3853 14.1719L19.1458 15.1302L20.6353 16.6198ZM20.1666 11.7031L21.8749 10.3802L12.4999 3.08854L9.46867 5.45312L17.6666 13.6615L20.1666 11.7031ZM3.40617 2.04688L2.08325 3.36979L6.47909 7.76562L3.12492 10.3802L4.82284 11.7031L12.4999 17.6719L14.6874 15.974L16.177 17.4635L12.4999 20.3177L4.82284 14.349L3.12492 15.6615L12.4999 22.9531L17.6562 18.9427L21.5937 22.8802L22.9166 21.5573L3.40617 2.04688Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default LayersClearIcon;
