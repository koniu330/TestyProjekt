export interface User {
  name: string
  email: string
  password: string
  firstName?: string
  lastName?: string
  address?: string
  country?: string
  state?: string
  city?: string
  zipcode?: string
  mobileNumber?: string
}

export interface Product {
  id: number
  name: string
  quantity: number
}

export interface ContactMessage {
  name: string
  email: string
  subject: string
  message: string
}
