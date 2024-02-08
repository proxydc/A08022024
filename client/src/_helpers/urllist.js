const backEndURL =
  process.env.NODE_ENV == "production"
    ? process.env.VUE_APP_PRODURL
    : process.env.VUE_APP_DEVURL;
const baseURL = backEndURL + "/api/v1/database/";
class urllist {
  static getBackEndURL() {
    return backEndURL;
  }
  static getLoginUrl() {
    return baseURL + "account";
  }
  static getAddAccUrl() {
    return baseURL + "account/add";
  }
  static getEditDelAccUrl(id) {
    return baseURL + "account/" + id;
  }
  static getDcsUrl() {
    return baseURL + "dc";
  }
  static getDcUrl(id) {
    return baseURL + "dc/" + id;
  }
  static getDcDocUrl(id) {
    return baseURL + "dc/doc/" + id;
  }
  static getDcAdminUrl(id) {
    return baseURL + "dcAdmin/" + id;
  }
  static getAddDcUrl() {
    return baseURL + "dc/add";
  }
  static getDelDcUrl(id) {
    return baseURL + "dc/" + id;
  }
}

export default urllist;
