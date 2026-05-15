import React from 'react';

export interface WarehouseIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const WarehouseIcon = ({ size, ...props }: WarehouseIconProps) => {
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
        d="M22.9166 21.875V7.29167L12.4999 3.125L2.08325 7.29167V21.875H7.29159V12.5H17.7083V21.875H22.9166ZM11.4583 19.7917H9.37492V21.875H11.4583V19.7917ZM13.5416 16.6667H11.4583V18.75H13.5416V16.6667ZM15.6249 19.7917H13.5416V21.875H15.6249V19.7917Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default WarehouseIcon;
