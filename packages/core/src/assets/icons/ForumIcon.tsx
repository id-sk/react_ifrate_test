import React from 'react';

export interface ForumIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ForumIcon = ({ size, ...props }: ForumIconProps) => {
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
      
<path d="M21.8749 6.24992H19.7916V15.6249H6.24992V17.7083C6.24992 18.2812 6.71867 18.7499 7.29159 18.7499H18.7499L22.9166 22.9166V7.29159C22.9166 6.71867 22.4478 6.24992 21.8749 6.24992ZM17.7083 12.4999V3.12492C17.7083 2.552 17.2395 2.08325 16.6666 2.08325H3.12492C2.552 2.08325 2.08325 2.552 2.08325 3.12492V17.7083L6.24992 13.5416H16.6666C17.2395 13.5416 17.7083 13.0728 17.7083 12.4999Z" fill="currentColor"/>
    </svg>
  );
};

export default ForumIcon;
