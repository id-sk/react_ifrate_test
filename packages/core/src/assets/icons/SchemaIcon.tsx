import React from 'react';

export interface SchemaIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SchemaIcon = ({ size, ...props }: SchemaIconProps) => {
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
        d="M14.0624 9.37508V11.4584H10.9374V9.37508H8.33325V7.29175H10.9374V1.04175H3.64575V7.29175H6.24992V9.37508H3.64575V15.6251H6.24992V17.7084H3.64575V23.9584H10.9374V17.7084H8.33325V15.6251H10.9374V13.5417H14.0624V15.6251H21.3541V9.37508H14.0624Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SchemaIcon;
