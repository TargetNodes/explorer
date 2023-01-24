// Theme Colors
// Initially this will be blank. Later on when app is initialized we will assign bootstrap colors to this from CSS variables.
// The below colors are defined in _variables.scss file.
export const $themeColors = {
  // colors: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark']
  colors: ['blue', 'cyan', 'green', 'pink', 'orange', 'red', 'light', 'grey'],
}

// App Breakpoints
// Initially this will be blank. Later on when app is initialized we will assign bootstrap breakpoints to this object from CSS variables.
export const $themeBreakpoints = {
  // breakpoints: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']
}

// APP CONFIG
export const $themeConfig = {
  app: {
    appName: 'TargetNodes', // Will update name in navigation menu (Branding)
    // eslint-disable-next-line global-require
    appLogoImage: '/logo.png', // Will update logo in navigation menu (Branding)
  },
  layout: {
    isRTL: false,
    skin: 'light', // light, dark, bordered, semi-dark
    routerTransition: 'zoom-fade', // zoom-fade, slide-fade, fade-bottom, fade, zoom-out, none
    type: 'vertical', // vertical, horizontal
    contentWidth: 'full', // full, boxed
    menu: {
      hidden: false,
      isCollapsed: false,
    },
    navbar: {
      // ? For horizontal menu, navbar type will work for navMenu type
      type: 'static', // static , sticky , floating, hidden
      backgroundColor: '', // BS color options [primary, success, etc]
    },
    footer: {
      type: 'static', // static, sticky, hidden
    },
    customizer: true,
    enableScrollToTop: true,
  },
}
