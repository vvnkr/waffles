import Icon from './icon-base';

type UserInvertedProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function UserInverted({ size, ...restProps }: UserInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M5,18 C4.33333333,18 4,17.6666667 4,17 L4,12 C4,10.3431458 5.34314575,9 7,9 L11,9 C12.6568542,9 14,10.3431458 14,12 L14,17 C14,17.6666667 13.6667473,18 13.0002419,18 C12.0004837,18 6,18 5,18 Z M9,8 C6.790861,8 5,6.209139 5,4 C5,1.790861 6.790861,0 9,0 C11.209139,0 13,1.790861 13,4 C13,6.209139 11.209139,8 9,8 Z"
      />
    </Icon>
  );
}

export default UserInverted;
