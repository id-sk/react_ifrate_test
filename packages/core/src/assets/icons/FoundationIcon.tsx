import React from 'react';

export interface FoundationIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FoundationIcon = ({ size, ...props }: FoundationIconProps) => {
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
        d="M19.7916 13.021H22.9166L12.4999 3.646L2.08325 13.021H5.20825V16.146H3.12492V18.2293H5.20825V21.3543H7.29159V18.2293H11.4583V21.3543H13.5416V18.2293H17.7083V21.3543H19.7916V18.2293H21.8749V16.146H19.7916V13.021ZM7.29159 16.146V11.1356L11.4583 7.38558V16.146H7.29159ZM13.5416 16.146V7.38558L17.7083 11.1356V16.146H13.5416Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FoundationIcon;
