import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';

import { Footer } from '../../../ui';

describe('<Footer />', () => {
  test('Should show the Component', () => {
    expect(render(<Footer />)).toBeDefined();
  });
});
