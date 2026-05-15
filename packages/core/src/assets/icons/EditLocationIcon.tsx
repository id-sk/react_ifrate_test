import React from 'react';

export interface EditLocationIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const EditLocationIcon = ({ size, ...props }: EditLocationIconProps) => {
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
        d="M12.4999 2.0835C8.47909 2.0835 5.20825 5.35433 5.20825 9.37516C5.20825 14.8439 12.4999 22.9168 12.4999 22.9168C12.4999 22.9168 19.7916 14.8439 19.7916 9.37516C19.7916 5.35433 16.5208 2.0835 12.4999 2.0835ZM10.8749 12.5002H9.37492V11.0002L12.8645 7.521L14.3541 9.01058L10.8749 12.5002ZM15.5103 7.86475L14.7812 8.59391L13.2812 7.09391L14.0103 6.36475C14.1666 6.2085 14.4166 6.2085 14.5728 6.36475L15.5103 7.30225C15.6666 7.4585 15.6666 7.7085 15.5103 7.86475Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default EditLocationIcon;
