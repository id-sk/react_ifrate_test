import React from 'react';

export interface NewLabelIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const NewLabelIcon = ({ size, ...props }: NewLabelIconProps) => {
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
        d="M22.3959 11.9792L17.8438 18.3958C17.4584 18.9375 16.823 19.2708 16.1459 19.2708H13.0209V13.0208H9.89591V9.89583H3.64591V6.77083C3.64591 5.625 4.58341 4.6875 5.72925 4.6875H16.1459C16.823 4.6875 17.4584 5.01042 17.8438 5.5625L22.3959 11.9792ZM10.9376 15.1042H7.81258V11.9792H5.72925V15.1042H2.60425V17.1875H5.72925V20.3125H7.81258V17.1875H10.9376V15.1042Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default NewLabelIcon;
