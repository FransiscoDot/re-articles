const _getApiTypeAllowed = Symbol("get the api type allowed");

export default class FactoryOption {
  [_getApiTypeAllowed]() {
    return [
      "newsapi"
    ];
  }

  constructor(apiType, interest, language, country = null, sortBy = null) {

    if (apiType == null || apiType == "")
      throw("The property apiType of option cannot be null or empty");

    if (interest == null || interest == "")
      throw("The property interest of option cannot be null or empty");

    if (language == null || language == "")
      throw("The property language of option cannot be null or empty");

    if (!this[_getApiTypeAllowed]().includes(apiType.toLowerCase()))
      throw("This kinda of api is not allowed");

    this.apiType = apiType.toLowerCase();
    this.interest = interest;
    this.country = country;
    this.language = language;
    this.sortBy = sortBy;
  }
}
