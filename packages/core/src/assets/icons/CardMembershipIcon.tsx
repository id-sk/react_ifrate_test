import React from 'react';

export interface CardMembershipIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CardMembershipIcon = ({ size, ...props }: CardMembershipIconProps) => {
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
        d="M20.8333 2.08331H4.16659C3.01034 2.08331 2.08325 3.0104 2.08325 4.16665V15.625C2.08325 16.7812 3.01034 17.7083 4.16659 17.7083H8.33325V22.9166L12.4999 20.8333L16.6666 22.9166V17.7083H20.8333C21.9895 17.7083 22.9166 16.7812 22.9166 15.625V4.16665C22.9166 3.0104 21.9895 2.08331 20.8333 2.08331ZM20.8333 15.625H4.16659V13.5416H20.8333V15.625ZM20.8333 10.4166H4.16659V4.16665H20.8333V10.4166Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CardMembershipIcon;
