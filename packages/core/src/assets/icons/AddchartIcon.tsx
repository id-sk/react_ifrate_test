import React from 'react';

export interface AddchartIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AddchartIcon = ({ size, ...props }: AddchartIconProps) => {
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
        d="M5.72917 10.4062H7.8125V17.6979H5.72917V10.4062ZM14.0625 13.5312H16.1458V17.6979H14.0625V13.5312ZM9.89583 7.28125H11.9792V17.6979H9.89583V7.28125ZM20.3125 7.29167V4.16667H18.2292V7.29167H15.1042V9.375H18.2292V12.5H20.3125V9.375H23.4375V7.29167H20.3125ZM18.2292 19.7917H3.64583V5.20833H16.1458V3.125H3.64583C2.5 3.125 1.5625 4.0625 1.5625 5.20833V19.7917C1.5625 20.9375 2.5 21.875 3.64583 21.875H18.2292C19.375 21.875 20.3125 20.9375 20.3125 19.7917V14.5833H18.2292V19.7917Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default AddchartIcon;
