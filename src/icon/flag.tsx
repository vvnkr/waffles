import Icon from './icon-base';

type FlagProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Flag({ size, ...restProps }: FlagProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M5,4 L5,9 L14,9 L14,4 L5,4 Z M5,11 L5,17 C5,17.5522847 4.55228475,18 4,18 C3.44771525,18 3,17.5522847 3,17 L3,1 C3,0.44771525 3.44771525,1.01453063e-16 4,0 C4.55228475,-1.01453063e-16 5,0.44771525 5,1 L5,2 L14,2 C15.1045695,2 16,2.8954305 16,4 L16,9 C16,10.1045695 15.1045695,11 14,11 L5,11 Z"
      />
    </Icon>
  );
}

export default Flag;
