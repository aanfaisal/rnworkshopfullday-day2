import { createTheme } from 'anoa-react-native-theme'

export const BaseTheme = createTheme(
  {
    spacing: {
      normal: 24
    },
    colors: {
      background: '#FCAF58',
      text: '#fff'
    }
  },
  vars => ({
    screenContainer: {
      flex: 1,
      padding: vars.spacing.normal,
      backgroundColor: vars.colors.background
    }
  })
)
