import React from 'react';

export interface PaymentsIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PaymentsIcon = ({ size, ...props }: PaymentsIconProps) => {
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
        d="M19.7917 14.5832V6.24984C19.7917 5.104 18.8542 4.1665 17.7084 4.1665H3.12508C1.97925 4.1665 1.04175 5.104 1.04175 6.24984V14.5832C1.04175 15.729 1.97925 16.6665 3.12508 16.6665H17.7084C18.8542 16.6665 19.7917 15.729 19.7917 14.5832ZM10.4167 13.5415C8.68758 13.5415 7.29175 12.1457 7.29175 10.4165C7.29175 8.68734 8.68758 7.2915 10.4167 7.2915C12.1459 7.2915 13.5417 8.68734 13.5417 10.4165C13.5417 12.1457 12.1459 13.5415 10.4167 13.5415ZM23.9584 7.2915V18.7498C23.9584 19.8957 23.0209 20.8332 21.8751 20.8332H4.16675V18.7498H21.8751V7.2915H23.9584Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PaymentsIcon;
