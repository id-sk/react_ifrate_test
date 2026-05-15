import React from 'react';

export interface RuleIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const RuleIcon = ({ size, ...props }: RuleIconProps) => {
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
        d="M17.1353 11.4948L13.4478 7.80733L14.9166 6.33858L17.1249 8.54692L21.5416 4.13025L23.0103 5.599L17.1353 11.4948ZM11.3645 7.32817H1.9895V9.4115H11.3645V7.32817ZM21.7812 14.0052L20.3124 12.5365L17.6145 15.2344L14.9166 12.5365L13.4478 14.0052L16.1458 16.7032L13.4478 19.4011L14.9166 20.8698L17.6145 18.1719L20.3124 20.8698L21.7812 19.4011L19.0833 16.7032L21.7812 14.0052ZM11.3645 15.6615H1.9895V17.7448H11.3645V15.6615Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default RuleIcon;
