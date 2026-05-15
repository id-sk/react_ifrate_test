import React from 'react';

export interface Icon360IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Icon360Icon = ({ size, ...props }: Icon360IconProps) => {
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
        d="M12.4999 5.729C6.74992 5.729 2.08325 8.06234 2.08325 10.9373C2.08325 13.2707 5.14575 15.2394 9.37492 15.9061V19.2707L13.5416 15.104L9.37492 10.9373V13.7811C6.09367 13.1978 4.16659 11.8019 4.16659 10.9373C4.16659 9.83317 7.33325 7.81234 12.4999 7.81234C17.6666 7.81234 20.8333 9.83317 20.8333 10.9373C20.8333 11.6978 19.3124 12.9061 16.6666 13.5728V15.7082C20.3437 14.9061 22.9166 13.0728 22.9166 10.9373C22.9166 8.06234 18.2499 5.729 12.4999 5.729Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Icon360Icon;
