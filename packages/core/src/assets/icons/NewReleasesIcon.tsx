import React from 'react';

export interface NewReleasesIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const NewReleasesIcon = ({ size, ...props }: NewReleasesIconProps) => {
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
        d="M23.9584 12.4948L21.4167 9.599L21.7709 5.76567L18.0105 4.9115L16.0417 1.599L12.5001 3.11983L8.95842 1.599L6.98966 4.9115L3.22925 5.75525L3.58341 9.58858L1.04175 12.4948L3.58341 15.3907L3.22925 19.2344L6.98966 20.0886L8.95842 23.4011L12.5001 21.8698L16.0417 23.3907L18.0105 20.0782L21.7709 19.224L21.4167 15.3907L23.9584 12.4948ZM13.5417 17.7032H11.4584V15.6198H13.5417V17.7032ZM13.5417 13.5365H11.4584V7.2865H13.5417V13.5365Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default NewReleasesIcon;
