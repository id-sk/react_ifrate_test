import React from 'react';

export interface FemaleIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FemaleIcon = ({ size, ...props }: FemaleIconProps) => {
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
        d="M18.2291 9.37516C18.2291 6.2085 15.6666 3.646 12.4999 3.646C9.33325 3.646 6.77075 6.2085 6.77075 9.37516C6.77075 12.1877 8.79159 14.5106 11.4583 15.0002V17.1877H9.37492V19.271H11.4583V21.3543H13.5416V19.271H15.6249V17.1877H13.5416V15.0002C16.2083 14.5106 18.2291 12.1877 18.2291 9.37516ZM8.85409 9.37516C8.85409 7.36475 10.4895 5.72933 12.4999 5.72933C14.5103 5.72933 16.1458 7.36475 16.1458 9.37516C16.1458 11.3856 14.5103 13.021 12.4999 13.021C10.4895 13.021 8.85409 11.3856 8.85409 9.37516Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FemaleIcon;
