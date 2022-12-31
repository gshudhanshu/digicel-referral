import * as React from 'react'
import { Global } from '@emotion/react'

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Hurme Geometric Sans 2';
        font-display: swap;
        font-style: normal;
        src: local(''), url('/fonts/HurmeGeometricSans2 Black.woff') format('woff');
        font-weight: 900;
      }
      @font-face {
        font-family: 'Hurme Geometric Sans 2';
        font-display: swap;
        font-style: normal;
        src: local(''), url('/fonts/HurmeGeometricSans2 Bold.woff') format('woff');
        font-weight: 700;
      }
      @font-face {
        font-family: 'Hurme Geometric Sans 2';
        font-display: swap;
        font-style: normal;
        src: local(''), url('/fonts/HurmeGeometricSans2 SemiBold.woff') format('woff');
        font-weight: 500;
      }
      `}
  />
)
