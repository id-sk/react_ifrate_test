import React from 'react';

export interface Filter2IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Filter2Icon = ({ size, ...props }: Filter2IconProps) => {
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
        d="M3.12508 5.20817H1.04175V21.8748C1.04175 23.0207 1.97925 23.9582 3.12508 23.9582H19.7917V21.8748H3.12508V5.20817ZM21.8751 1.0415H7.29175C6.14591 1.0415 5.20841 1.979 5.20841 3.12484V17.7082C5.20841 18.854 6.14591 19.7915 7.29175 19.7915H21.8751C23.0209 19.7915 23.9584 18.854 23.9584 17.7082V3.12484C23.9584 1.979 23.0209 1.0415 21.8751 1.0415ZM21.8751 17.7082H7.29175V3.12484H21.8751V17.7082ZM17.7084 13.5415H13.5417V11.4582H15.6251C16.7709 11.4582 17.7084 10.5311 17.7084 9.37484V7.2915C17.7084 6.13525 16.7709 5.20817 15.6251 5.20817H11.4584V7.2915H15.6251V9.37484H13.5417C12.3959 9.37484 11.4584 10.3019 11.4584 11.4582V15.6248H17.7084V13.5415Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Filter2Icon;
