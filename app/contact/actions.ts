'use server'

export async function sendContactForm(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string
  const service = formData.get('service') as string
  const message = formData.get('message') as string

  // Simple server-side validation
  const errors: Record<string, string> = {}
  if (!name || name.length < 2) errors.name = 'Name must be at least 2 characters'
  if (!email || !email.includes('@')) errors.email = 'Please enter a valid email'
  if (!message || message.length < 10) errors.message = 'Please provide a bit more detail'

  if (Object.keys(errors).length > 0) {
    return { success: false, errors }
  }

  // Simulate delay for a premium feel
  await new Promise(resolve => setTimeout(resolve, 1500))

  console.log('Form submission received:', { name, email, phone, service, message })

  // Integration point for Resend / SendGrid would go here
  
  return { success: true }
}
