export default class Validator {
  static validateUsername(Username) {
    return /^[^\d_-][\w-]+[^\d_-]$/.test(Username) && /(?<!\D\d{4,}\D*)\D\d{1,3}\D(?!\D+\d{4,}\D)/.test(Username);
  }
}
