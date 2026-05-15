import React from 'react';

export interface LinearScaleIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const LinearScaleIcon = ({ size, ...props }: LinearScaleIconProps) => {
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
        d="M20.3124 9.89575C19.2395 9.89575 18.3333 10.5416 17.927 11.4583H14.8853C14.4791 10.5416 13.5728 9.89575 12.4999 9.89575C11.427 9.89575 10.5208 10.5416 10.1145 11.4583H7.07284C6.66659 10.5416 5.76034 9.89575 4.68742 9.89575C3.24992 9.89575 2.08325 11.0624 2.08325 12.4999C2.08325 13.9374 3.24992 15.1041 4.68742 15.1041C5.76034 15.1041 6.66659 14.4583 7.07284 13.5416H10.1145C10.5208 14.4583 11.427 15.1041 12.4999 15.1041C13.5728 15.1041 14.4791 14.4583 14.8853 13.5416H17.927C18.3333 14.4583 19.2395 15.1041 20.3124 15.1041C21.7499 15.1041 22.9166 13.9374 22.9166 12.4999C22.9166 11.0624 21.7499 9.89575 20.3124 9.89575Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default LinearScaleIcon;
