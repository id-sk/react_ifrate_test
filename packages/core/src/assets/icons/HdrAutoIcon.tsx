import React from 'react';

export interface HdrAutoIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const HdrAutoIcon = ({ size, ...props }: HdrAutoIconProps) => {
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
        d="M12.5416 8.37492H12.4478L10.7812 13.1145H14.2083L12.5416 8.37492Z"
        fill="currentColor"
      />
      <path
        d="M12.4999 2.08325C6.74992 2.08325 2.08325 6.74992 2.08325 12.4999C2.08325 18.2499 6.74992 22.9166 12.4999 22.9166C18.2499 22.9166 22.9166 18.2499 22.9166 12.4999C22.9166 6.74992 18.2499 2.08325 12.4999 2.08325ZM15.8437 17.7083L14.8228 14.7812H10.1874L9.14575 17.7083H7.16659L11.4687 6.24992H13.5208L17.8228 17.7083H15.8437Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default HdrAutoIcon;
