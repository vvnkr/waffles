import { render, fireEvent } from '@testing-library/react';

import { Card } from '../index';

describe('Card', () => {
  it('renders as a section by default', () => {
    const { container } = render(
      <Card>
        <p>Taylor Swift</p>
      </Card>,
    );

    const card = container.querySelector('section');

    expect(card).toBeInTheDocument();
  });

  it('renders as custom element provided via as prop', () => {
    const { container } = render(
      <Card as="div">
        <p>Taylor Swift</p>
      </Card>,
    );

    const card = container.querySelector('div');

    expect(card).toBeInTheDocument();
  });

  it('sets the data attribute on the card', () => {
    const { getByTestId } = render(
      <Card data-testid="taylors-card">
        <p>Taylor Swift</p>
      </Card>,
    );

    const button = getByTestId('taylors-card');

    expect(button).toBeInTheDocument();
  });

  it('renders snapshot of content', () => {
    const { container } = render(
      <Card>
        <h3>Taylor Swift</h3>
        <p>Better than Jimmy Page.</p>
      </Card>,
    );

    const card = container.querySelector('section');

    expect(card).toMatchSnapshot();
  });

  it('renders snapshot of the card with hover disabled', () => {
    const { container } = render(
      <Card disableHoverEffect>
        <h3>Taylor Swift</h3>
        <p>Better than Jimmy Page.</p>
      </Card>,
    );

    const card = container.querySelector('section');

    expect(card).toMatchSnapshot();
  });

  it('renders snapshot of headstones and content', () => {
    const { container } = render(
      <Card
        headstone={
          <>
            <span>Headstone 1</span>
            <span>Headstone 2</span>
          </>
        }
      >
        <p>Taylor Swift</p>
      </Card>,
    );

    const card = container.querySelector('section');

    expect(card).toMatchSnapshot();
  });

  it('renders snapshot of focused card', () => {
    const { getByText } = render(
      <Card as="a" href="http://taylorswift.com">
        Taylor Swift Website
      </Card>,
    );

    const card = getByText('Taylor Swift Website');
    fireEvent.focus(card);

    expect(card).toMatchSnapshot();
  });
});
