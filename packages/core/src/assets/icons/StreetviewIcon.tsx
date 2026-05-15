import React from 'react';

export interface StreetviewIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const StreetviewIcon = ({ size, ...props }: StreetviewIconProps) => {
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
        d="M12.0416 15.9689C11.6874 16.2502 11.4583 16.6981 11.4583 17.1877V22.9168H18.7499C19.8958 22.9168 20.8333 21.9793 20.8333 20.8335V14.6043C19.8541 14.2606 18.802 14.0627 17.7083 14.0627C15.5937 14.0627 13.6145 14.7918 12.0416 15.9689Z"
        fill="currentColor"
      />
      <path
        d="M17.7083 12.5002C20.5847 12.5002 22.9166 10.1683 22.9166 7.29183C22.9166 4.41535 20.5847 2.0835 17.7083 2.0835C14.8318 2.0835 12.4999 4.41535 12.4999 7.29183C12.4999 10.1683 14.8318 12.5002 17.7083 12.5002Z"
        fill="currentColor"
      />
      <path
        d="M10.9374 7.29183C10.9374 6.16683 11.2187 5.10433 11.7083 4.16683H4.16659C3.02075 4.16683 2.08325 5.10433 2.08325 6.25016V20.8335C2.08325 21.4064 2.32284 21.9272 2.69784 22.3022L12.927 12.0731C11.6978 10.8543 10.9374 9.16683 10.9374 7.29183Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default StreetviewIcon;
