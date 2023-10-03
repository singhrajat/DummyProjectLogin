import Snackbar from 'react-native-snackbar';
import Constants from '../Constant/Constants';

export default UtilsFunctions = {
  isEmailValid: function (email) {
    return Constants.emailRegex.test(email);
  },

  SnackSuccess: function (data) {
  return  Snackbar.show({
      text: data,
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor: 'green',
      textColor: 'white',
    });
  },
  SnackError: function (data) {
   return Snackbar.show({
      text: data,
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor: 'red',
      textColor: 'white',
    });
  },
};
