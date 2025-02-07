import { css } from '@emotion/react';

import { Card } from '../index';
import { tokens } from '../../tokens';
import { Paragraph } from '../../paragraph';
import { Heading } from '../../heading';
import { Avatar } from '../../avatar';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
  padding-top: ${tokens.spacing.xlarge};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Card headstone={<Avatar content="A" data-testid="card-headstone" />}>
        <Heading size="large">Card with Headstone</Heading>
        <Paragraph
          css={css`
            margin-bottom: 0;
          `}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Paragraph>
      </Card>
    </div>
  );
}

export default Story;
