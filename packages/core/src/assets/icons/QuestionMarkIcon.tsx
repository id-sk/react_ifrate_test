import React from 'react';

export interface QuestionMarkIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const QuestionMarkIcon = ({ size, ...props }: QuestionMarkIconProps) => {
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
        d="M11.53 12.8645C12.3321 11.4166 13.8738 10.5625 14.7696 9.28121C15.7175 7.93746 15.1863 5.42704 12.4988 5.42704C10.7384 5.42704 9.87378 6.76038 9.5092 7.86454L6.81128 6.72913C7.55086 4.51038 9.56128 2.60413 12.4884 2.60413C14.9363 2.60413 16.6134 3.71871 17.4675 5.11454C18.1967 6.31246 18.6238 8.55204 17.4988 10.2187C16.2488 12.0625 15.0509 12.625 14.405 13.8125C14.1446 14.2916 14.0404 14.6041 14.0404 16.1458H11.03C11.0196 15.3333 10.8946 14.0104 11.53 12.8645ZM14.5821 20.3125C14.5821 21.4583 13.6446 22.3958 12.4988 22.3958C11.3529 22.3958 10.4154 21.4583 10.4154 20.3125C10.4154 19.1666 11.3529 18.2291 12.4988 18.2291C13.6446 18.2291 14.5821 19.1666 14.5821 20.3125Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default QuestionMarkIcon;
