//pomocne selektory

export const authSelectors = {
  loginTitle: '.login-form h2',
  loginEmailInput: 'input[data-qa="login-email"]',
  loginPasswordInput: 'input[data-qa="login-password"]',
  loginButton: 'button[data-qa="login-button"]',
  loginError: '.login-form p',

  signupTitle: '.signup-form h2',
  signupNameInput: 'input[data-qa="signup-name"]',
  signupEmailInput: 'input[data-qa="signup-email"]',
  signupButton: 'button[data-qa="signup-button"]',
  signupError: '.signup-form p',

  accountInfoTitle: '.login-form h2, .signup-form h2, h2.title',
  genderMrRadio: '#id_gender1',
  genderMrsRadio: '#id_gender2',
  passwordInput: '#password',
  daySelect: '#days',
  monthSelect: '#months',
  yearSelect: '#years',
  newsletterCheckbox: '#newsletter',
  offersCheckbox: '#optin',
  firstNameInput: '#first_name',
  lastNameInput: '#last_name',
  companyInput: '#company',
  addressInput: '#address1',
  countrySelect: '#country',
  stateInput: '#state',
  cityInput: '#city',
  zipcodeInput: '#zipcode',
  mobileNumberInput: '#mobile_number',
  createAccountButton: 'button[data-qa="create-account"]',
  accountCreatedTitle: 'h2[data-qa="account-created"]',
  accountDeletedTitle: 'h2[data-qa="account-deleted"]',
  continueButton: 'a[data-qa="continue-button"]'
} as const
