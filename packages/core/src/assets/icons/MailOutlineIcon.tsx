import React from 'react';

export interface MailOutlineIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MailOutlineIcon = ({ size, ...props }: MailOutlineIconProps) => {
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
        d="M20.8333 4.16675H4.16659C3.02075 4.16675 2.09367 5.10425 2.09367 6.25008L2.08325 18.7501C2.08325 19.8959 3.02075 20.8334 4.16659 20.8334H20.8333C21.9791 20.8334 22.9166 19.8959 22.9166 18.7501V6.25008C22.9166 5.10425 21.9791 4.16675 20.8333 4.16675ZM20.8333 18.7501H4.16659V8.33341L12.4999 13.5417L20.8333 8.33341V18.7501ZM12.4999 11.4584L4.16659 6.25008H20.8333L12.4999 11.4584Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MailOutlineIcon;
