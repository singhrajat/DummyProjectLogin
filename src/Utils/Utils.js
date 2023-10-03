import Constants from "../Constant/Constants";

export default UtilsFunctions={

    isEmailValid:function (email) {
        return Constants.emailRegex.test(email);
      }
}