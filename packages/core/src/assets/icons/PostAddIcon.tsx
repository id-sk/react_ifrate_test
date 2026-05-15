import React from 'react';

export interface PostAddIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PostAddIcon = ({ size, ...props }: PostAddIconProps) => {
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
        d="M17.1876 20.5417H4.68758V7.81258H11.9792V5.72925H4.68758C3.54175 5.72925 2.60425 6.66675 2.60425 7.81258V20.3126C2.60425 21.4584 3.54175 22.3959 4.68758 22.3959H17.1876C18.3334 22.3959 19.2709 21.4584 19.2709 20.3126V13.0209H17.1876V20.5417Z"
        fill="currentColor"
      />
      <path
        d="M19.2709 2.60425H17.1876V5.72925H14.0626C14.073 5.73966 14.0626 7.81258 14.0626 7.81258H17.1876V10.9272C17.198 10.9376 19.2709 10.9272 19.2709 10.9272V7.81258H22.3959V5.72925H19.2709V2.60425Z"
        fill="currentColor"
      />
      <path d="M15.1042 9.89591H6.77091V11.9792H15.1042V9.89591Z" fill="currentColor" />
      <path d="M6.77091 13.0209V15.1042H15.1042V13.0209H6.77091Z" fill="currentColor" />
      <path d="M15.1042 16.1459H6.77091V18.2292H15.1042V16.1459Z" fill="currentColor" />
    </svg>
  );
};

export default PostAddIcon;
