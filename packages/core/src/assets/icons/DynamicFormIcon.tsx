import React from 'react';

export interface DynamicFormIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DynamicFormIcon = ({ size, ...props }: DynamicFormIconProps) => {
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
        d="M17.7083 20.8334V11.4584H15.6249V4.16669H22.9166L20.8333 9.37502H22.9166L17.7083 20.8334ZM15.6249 13.5417V20.8334H4.16659C3.02075 20.8334 2.08325 19.8959 2.08325 18.75V15.625C2.08325 14.4792 3.02075 13.5417 4.16659 13.5417H15.6249ZM6.51034 16.4063H4.94784V17.9688H6.51034V16.4063ZM13.5416 4.16669V11.4584H4.16659C3.02075 11.4584 2.08325 10.5209 2.08325 9.37502V6.25002C2.08325 5.10419 3.02075 4.16669 4.16659 4.16669H13.5416ZM6.51034 7.03127H4.94784V8.59377H6.51034V7.03127Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DynamicFormIcon;
