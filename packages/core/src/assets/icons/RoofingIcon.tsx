import React from 'react';

export interface RoofingIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const RoofingIcon = ({ size, ...props }: RoofingIconProps) => {
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
        d="M13.5416 19.271H11.4583V17.1877H13.5416V19.271ZM15.6249 15.1043H9.37492V21.3543H15.6249V15.1043ZM19.7916 10.2085V4.68766H16.6666V7.396L12.4999 3.646L2.08325 13.021H5.20825L12.4999 6.44808L19.7916 13.021H22.9166L19.7916 10.2085Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default RoofingIcon;
