import React from 'react';

export interface CasesIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CasesIcon = ({ size, ...props }: CasesIconProps) => {
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
        d="M18.7499 6.25016V4.16683L16.6666 2.0835H11.4583L9.37492 4.16683V6.25016H5.20825V17.7085C5.20825 17.7085 6.24992 19.7918 7.29159 19.7918H20.8333C20.8333 19.7918 22.9166 18.771 22.9166 17.7085V6.25016H18.7499ZM4.16659 9.37516H2.08325V20.8335C2.08325 21.9897 3.01034 22.9168 4.16659 22.9168H18.7499C19.9062 22.9168 20.8333 21.9897 20.8333 20.8335H4.16659V9.37516ZM11.4583 5.2085C11.4583 4.63558 12.0103 4.16683 12.4999 4.16683H15.6249C16.1041 4.16683 16.6666 4.72933 16.6666 5.2085V6.25016H11.4583V5.2085ZM5.20825 6.25016H22.9166V17.7085C22.9166 18.8543 21.9791 19.7918 20.8333 19.7918H7.29159C6.14575 19.7918 5.20825 18.8543 5.20825 17.7085V6.25016Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CasesIcon;
