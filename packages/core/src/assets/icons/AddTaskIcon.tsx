import React from 'react';

export interface AddTaskIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AddTaskIcon = ({ size, ...props }: AddTaskIconProps) => {
  return (
    <svg
      width={size || "1em"}
      height={size || "1em"}
      viewBox="0 0 25 25"
      fill="none"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      
<path d="M21.8751 5.39581L9.98966 17.2916L5.573 12.875L7.04175 11.4062L9.98966 14.3541L20.4063 3.93748L21.8751 5.39581ZM11.4584 20.8333C6.86466 20.8333 3.12508 17.0937 3.12508 12.5C3.12508 7.90623 6.86466 4.16665 11.4584 4.16665C13.0938 4.16665 14.6251 4.64581 15.9167 5.46873L17.4272 3.95831C15.7292 2.78123 13.6772 2.08331 11.4584 2.08331C5.70841 2.08331 1.04175 6.74998 1.04175 12.5C1.04175 18.25 5.70841 22.9166 11.4584 22.9166C13.2605 22.9166 14.9584 22.4583 16.4376 21.6458L14.8751 20.0833C13.8334 20.5625 12.6772 20.8333 11.4584 20.8333ZM18.7501 15.625H15.6251V17.7083H18.7501V20.8333H20.8334V17.7083H23.9584V15.625H20.8334V12.5H18.7501V15.625Z" fill="currentColor"/>
    </svg>
  );
};

export default AddTaskIcon;
