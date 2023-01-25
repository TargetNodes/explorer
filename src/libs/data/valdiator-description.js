export default class ValidatorDescription {
  constructor() {
    this.moniker = 'N/A'
    this.identity = 'na'
    this.website = 'N/A'
    this.security_contact = 'string'
    this.details = 'Not available.'
  }

  init(element) {
    if (element != null) {
      this.moniker = element.moniker
      this.identity = element.identity
      this.website = element.website
      this.security_contact = element.security_contact
      this.details = element.details
    }
    return this
  }
}
