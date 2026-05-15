import React from 'react';

export interface CorporateFareIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CorporateFareIcon = ({ size, ...props }: CorporateFareIconProps) => {
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
        d="M12.4999 7.29167V3.125H2.08325V21.875H22.9166V7.29167H12.4999ZM10.4166 19.7917H4.16659V17.7083H10.4166V19.7917ZM10.4166 15.625H4.16659V13.5417H10.4166V15.625ZM10.4166 11.4583H4.16659V9.375H10.4166V11.4583ZM10.4166 7.29167H4.16659V5.20833H10.4166V7.29167ZM20.8333 19.7917H12.4999V9.375H20.8333V19.7917ZM18.7499 11.4583H14.5833V13.5417H18.7499V11.4583ZM18.7499 15.625H14.5833V17.7083H18.7499V15.625Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CorporateFareIcon;
