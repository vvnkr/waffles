import Icon from './icon-base';

type AttentionCircleInvertedProps = Omit<
  React.ComponentProps<typeof Icon>,
  'children'
>;

function AttentionCircleInverted({
  size,
  ...restProps
}: AttentionCircleInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M9,18 C4.02943725,18 0,13.9705627 0,9 C0,4.02943725 4.02943725,0 9,0 C13.9705627,0 18,4.02943725 18,9 C18,13.9705627 13.9705627,18 9,18 Z M9,14 C9.55228475,14 10,13.5522847 10,13 C10,12.4477153 9.55228475,12 9,12 C8.44771525,12 8,12.4477153 8,13 C8,13.5522847 8.44771525,14 9,14 Z M8,5 L8,10 C8,10.5522847 8.44771525,11 9,11 C9.55228475,11 10,10.5522847 10,10 L10,5 C10,4.44771525 9.55228475,4 9,4 C8.44771525,4 8,4.44771525 8,5 Z"
      />
    </Icon>
  );
}

export default AttentionCircleInverted;
