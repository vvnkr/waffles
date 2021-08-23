import Icon from './icon-base';

type CircleProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Circle({ size, ...restProps }: CircleProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M9,16 C12.8659932,16 16,12.8659932 16,9 C16,5.13400675 12.8659932,2 9,2 C5.13400675,2 2,5.13400675 2,9 C2,12.8659932 5.13400675,16 9,16 Z M9,18 C4.02943725,18 0,13.9705627 0,9 C0,4.02943725 4.02943725,0 9,0 C13.9705627,0 18,4.02943725 18,9 C18,13.9705627 13.9705627,18 9,18 Z"
      />
    </Icon>
  );
}

export default Circle;
