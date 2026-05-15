import React from 'react';

export interface RequestQuoteIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const RequestQuoteIcon = ({ size, ...props }: RequestQuoteIconProps) => {
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
        d="M14.5834 2.08325H6.25008C5.10425 2.08325 4.17716 3.02075 4.17716 4.16659L4.16675 20.8333C4.16675 21.9791 5.09383 22.9166 6.23966 22.9166H18.7501C19.8959 22.9166 20.8334 21.9791 20.8334 20.8333V8.33325L14.5834 2.08325ZM15.6251 12.4999H11.4584V13.5416H14.5834C15.1563 13.5416 15.6251 14.0103 15.6251 14.5833V17.7083C15.6251 18.2812 15.1563 18.7499 14.5834 18.7499H13.5417V19.7916H11.4584V18.7499H9.37508V16.6666H13.5417V15.6249H10.4167C9.84383 15.6249 9.37508 15.1562 9.37508 14.5833V11.4583C9.37508 10.8853 9.84383 10.4166 10.4167 10.4166H11.4584V9.37492H13.5417V10.4166H15.6251V12.4999ZM13.5417 8.33325V3.64575L18.2292 8.33325H13.5417Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default RequestQuoteIcon;
