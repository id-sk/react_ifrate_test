import React from 'react';

export interface TypeSpecimenIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TypeSpecimenIcon = ({ size, ...props }: TypeSpecimenIconProps) => {
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
        d="M4.16659 6.24992H2.08325V20.8333C2.08325 21.9791 3.02075 22.9166 4.16659 22.9166H18.7499V20.8333H4.16659V6.24992Z"
        fill="currentColor"
      />
      <path
        d="M20.8333 2.08325H8.33325C7.18742 2.08325 6.24992 3.02075 6.24992 4.16659V16.6666C6.24992 17.8124 7.18742 18.7499 8.33325 18.7499H20.8333C21.9791 18.7499 22.9166 17.8124 22.9166 16.6666V4.16659C22.9166 3.02075 21.9791 2.08325 20.8333 2.08325ZM17.3228 15.1041L16.4895 12.7083H12.7083L11.8541 15.1041H10.2187L13.7395 5.72909H15.4166L18.9374 15.1041H17.3228Z"
        fill="currentColor"
      />
      <path
        d="M14.5416 7.46867L13.177 11.3437H15.9791L14.6249 7.46867H14.5416Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default TypeSpecimenIcon;
