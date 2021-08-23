import Icon from './icon-base';

type MenuProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Menu({ size, ...restProps }: MenuProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M4,6 C3.44771525,6 3,5.55228475 3,5 C3,4.44771525 3.44771525,4 4,4 L14,4 C14.5522847,4 15,4.44771525 15,5 C15,5.55228475 14.5522847,6 14,6 L4,6 Z M4,10 C3.44771525,10 3,9.55228475 3,9 C3,8.44771525 3.44771525,8 4,8 L14,8 C14.5522847,8 15,8.44771525 15,9 C15,9.55228475 14.5522847,10 14,10 L4,10 Z M4,14 C3.44771525,14 3,13.5522847 3,13 C3,12.4477153 3.44771525,12 4,12 L14,12 C14.5522847,12 15,12.4477153 15,13 C15,13.5522847 14.5522847,14 14,14 L4,14 Z"
      />
    </Icon>
  );
}

export default Menu;
