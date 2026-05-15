import React from 'react';

export interface ShuffleOnIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ShuffleOnIcon = ({ size, ...props }: ShuffleOnIconProps) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.8751 1.04163H3.12508C1.97925 1.04163 1.04175 1.97913 1.04175 3.12496V21.875C1.04175 23.0208 1.97925 23.9583 3.12508 23.9583H21.8751C23.0209 23.9583 23.9584 23.0208 23.9584 21.875V3.12496C23.9584 1.97913 23.0209 1.04163 21.8751 1.04163ZM11.0313 9.55204L5.6355 4.16663L4.16675 5.63538L9.55216 11.0208L11.0313 9.55204ZM15.1042 4.16663L17.2292 6.29163L4.16675 19.3645L5.6355 20.8333L18.7084 7.77079L20.8334 9.89579V4.16663H15.1042ZM15.448 13.9687L13.9792 15.4375L17.2397 18.6979L15.1042 20.8333H20.8334V15.1041L18.7084 17.2291L15.448 13.9687Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ShuffleOnIcon;
