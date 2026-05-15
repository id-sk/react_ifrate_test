import React from 'react';

export interface TableRestaurantIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TableRestaurantIcon = ({ size, ...props }: TableRestaurantIconProps) => {
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
        d="M22.8749 10.1353L21.3853 4.92692C21.2603 4.479 20.8541 4.1665 20.3853 4.1665H4.61451C4.14576 4.1665 3.73951 4.479 3.61451 4.92692L2.12493 10.1353C1.93743 10.7915 2.43743 11.4582 3.12493 11.4582H5.4166L4.1666 20.8332H6.24993L6.94785 15.6248H18.0624L18.7499 20.8332H20.8333L19.5833 11.4582H21.8749C22.5624 11.4582 23.0624 10.7915 22.8749 10.1353ZM7.21868 13.5415L7.49993 11.4582H17.4999L17.7812 13.5415H7.21868Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default TableRestaurantIcon;
