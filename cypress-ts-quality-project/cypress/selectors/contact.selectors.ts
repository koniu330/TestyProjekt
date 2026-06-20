export const contactSelectors = {
  contactTitle: 'h2.title',
  getInTouchTitle: '.contact-form h2',
  nameInput: 'input[data-qa="name"]',
  emailInput: 'input[data-qa="email"]',
  subjectInput: 'input[data-qa="subject"]',
  messageTextarea: 'textarea[data-qa="message"]',
  uploadFileInput: 'input[name="upload_file"]',
  submitButton: 'input[data-qa="submit-button"]',
  successAlert: '.status.alert.alert-success',
  homeButton: '#form-section a.btn-success'
} as const
