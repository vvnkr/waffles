import { tokens } from '../tokens';
import {
  CheckmarkCircleInverted,
  CrossCircleInverted,
  AttentionCircleInverted,
  InfoCircleInverted,
} from '../icon';
import Notification from './notification';
import { iconStyle, iconWrapperStyle, iconBackgroundStyle } from './styles';

const variantMap = {
  success: {
    icon: <CheckmarkCircleInverted />,
    iconColor: tokens.colors.green,
    backgroundColor: tokens.colors.navy,
  },
  error: {
    icon: <CrossCircleInverted />,
    iconColor: tokens.colors.red,
    backgroundColor: tokens.colors.white,
  },
  warning: {
    icon: <AttentionCircleInverted />,
    iconColor: tokens.colors.orangeLight,
    backgroundColor: tokens.colors.navy,
  },
  default: {
    icon: <InfoCircleInverted />,
    iconColor: tokens.colors.blueDark,
    backgroundColor: tokens.colors.white,
  },
};

type IconProps = {
  variant: NonNullable<React.ComponentProps<typeof Notification>['variant']>;
};

function Icon({ variant }: IconProps) {
  return (
    <div css={iconStyle()}>
      <div css={iconWrapperStyle({ iconColor: variantMap[variant].iconColor })}>
        {variantMap[variant].icon}
      </div>
      <div
        css={iconBackgroundStyle({
          backgroundColor: variantMap[variant].backgroundColor,
        })}
      />
    </div>
  );
}

export default Icon;
