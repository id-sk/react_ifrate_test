import React from 'react';

export interface GasMeterIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const GasMeterIcon = ({ size, ...props }: GasMeterIconProps) => {
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
        d="M16.6667 4.16683H15.6251V2.0835H13.5417V4.16683H11.4584V2.0835H9.37508V4.16683H8.33341C6.03133 4.16683 4.16675 6.03141 4.16675 8.3335V18.7502C4.16675 21.0522 6.03133 22.9168 8.33341 22.9168H16.6667C18.9688 22.9168 20.8334 21.0522 20.8334 18.7502V8.3335C20.8334 6.03141 18.9688 4.16683 16.6667 4.16683ZM12.5001 18.7502C11.0626 18.7502 9.89591 17.6043 9.89591 16.1877C9.89591 15.0522 10.3438 14.7397 12.5001 12.2397C14.6355 14.7189 15.1042 15.0522 15.1042 16.1877C15.1042 17.6043 13.9376 18.7502 12.5001 18.7502ZM16.6667 10.4168H8.33341V8.3335H16.6667V10.4168Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default GasMeterIcon;
