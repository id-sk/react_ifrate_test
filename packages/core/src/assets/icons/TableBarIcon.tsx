import React from 'react';

export interface TableBarIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TableBarIcon = ({ size, ...props }: TableBarIconProps) => {
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
        d="M22.9166 7.81234C22.9166 5.80192 18.2499 4.1665 12.4999 4.1665C6.74992 4.1665 2.08325 5.80192 2.08325 7.81234C2.08325 9.69775 6.19784 11.2603 11.4583 11.4373V15.6248H9.7395C8.88534 15.6248 8.12492 16.1457 7.802 16.9373L6.24992 20.8332H8.33325L9.58325 17.7082H15.4166L16.6666 20.8332H18.7499L17.1874 16.9373C16.8749 16.1457 16.1041 15.6248 15.2603 15.6248H13.5416V11.4373C18.802 11.2603 22.9166 9.69775 22.9166 7.81234Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default TableBarIcon;
