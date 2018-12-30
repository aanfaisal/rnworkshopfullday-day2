import { createTheme } from 'anoa-react-native-theme'

export const BaseTheme = createTheme(
  {
    spacing: {
      normal: 24,
      small: 10
    },
    colors: {
      background: '#FCAF58',
      text: '#fff',
      inputTextBackground: '#FCEAD2'
    }
  },
  vars => ({
    screenContainer: {
      flex: 1,
      padding: vars.spacing.normal,
      backgroundColor: vars.colors.background
    },
    textInput: {
      backgroundColor: vars.colors.inputTextBackground,
      padding: vars.spacing.small,
      marginBottom: vars.spacing.small
    },
    restoItemContainer: {
      marginTop: vars.spacing.small,
      borderBottomColor: vars.colors.text,
      borderBottomWidth: 1,
      paddingBottom: vars.spacing.small
    },
    restoItemName: {
      fontSize: 18,
      fontWeight: "600" as "600"
    }
  })
)
