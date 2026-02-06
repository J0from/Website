"use server"

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FractionalFormData {
  fullName: string
  email: string
  company: string
  phone: string
  industry: string
  revenue: string
  teamSize: string
  interestedIn: string
  biggestChallenge: string
  ready: boolean
}

interface WhitepaperFormData {
  firstName: string
  lastName: string
  email: string
  title: string
  company: string
  industry: string
  employeeCount: string
  phone: string
}

interface WhitepaperDownloadFormData {
  firstName: string
  lastName: string
  email: string
  company: string
  jobTitle: string
  phone: string
}

interface GrowthFormData {
  name: string
  email: string
  company: string
  phone: string
  industry: string
  revenue: string
  interest: string
  challenge: string
  ready: boolean
}

async function getResendClient() {
  try {
    if (typeof window === "undefined" && process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend")
      return new Resend(process.env.RESEND_API_KEY)
    }
  } catch {
    console.log("[v0] Resend package not available, using mock email mode")
  }
  return null
}

export async function sendContactFormEmail(formData: ContactFormData) {
  try {
    const resend = await getResendClient()

    if (!resend) {
      console.log("[v0] Mock email send (no API key configured):", formData)
      return {
        success: true,
        data: { id: "mock-email-id" },
        message: "Email simulated successfully (no API key configured)",
      }
    }

    const { data, error } = await resend.emails.send({
      from: "Jo from Contact Form <onboarding@resend.dev>",
      to: ["hello@jofrom.io"],
      replyTo: formData.email,
      subject: `Contact Form: ${formData.subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #3b82f6 0%, #9333ea 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #475569; margin-bottom: 5px; }
              .value { color: #1e293b; }
              .message-box { background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #3b82f6; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">New Contact Form Submission</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">From:</div>
                  <div class="value">${formData.name}</div>
                </div>
                
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value"><a href="mailto:${formData.email}">${formData.email}</a></div>
                </div>
                
                <div class="field">
                  <div class="label">Subject:</div>
                  <div class="value">${formData.subject}</div>
                </div>
                
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="message-box">${formData.message.replace(/\n/g, "<br>")}</div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error("[v0] Resend error:", error)
      return { success: false, message: error.message }
    }

    return { success: true, data }
  } catch (error) {
    console.error("[v0] Error sending email:", error)
    return { success: false, message: "Failed to send email" }
  }
}

export async function sendFractionalFormEmail(formData: FractionalFormData) {
  try {
    const resend = await getResendClient()

    if (!resend) {
      console.log("[v0] Mock email send (no API key configured):", formData)
      return {
        success: true,
        data: { id: "mock-email-id" },
        message: "Email simulated successfully (no API key configured)",
      }
    }

    const { data, error } = await resend.emails.send({
      from: "Jo from Predictable Pipeline <onboarding@resend.dev>",
      to: ["hello@jofrom.io"],
      replyTo: formData.email,
      subject: `Fractional Consulting Inquiry - ${formData.company}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #3b82f6 0%, #9333ea 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #475569; margin-bottom: 5px; }
              .value { color: #1e293b; }
              .highlight { background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #3b82f6; }
              .badge { display: inline-block; background: #10b981; color: white; padding: 4px 12px; border-radius: 12px; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">New Fractional Consulting Inquiry</h2>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">Predictable Pipeline Form Submission</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Contact Information</div>
                  <div class="highlight">
                    <strong>${formData.fullName}</strong><br>
                    <a href="mailto:${formData.email}">${formData.email}</a><br>
                    <a href="tel:${formData.phone}">${formData.phone}</a>
                  </div>
                </div>
                
                <div class="field">
                  <div class="label">Company Details</div>
                  <div class="value">
                    <strong>Company:</strong> ${formData.company}<br>
                    <strong>Industry:</strong> ${formData.industry}<br>
                    <strong>Annual Revenue:</strong> ${formData.revenue}<br>
                    <strong>Team Size:</strong> ${formData.teamSize}
                  </div>
                </div>
                
                <div class="field">
                  <div class="label">Service Interest</div>
                  <div class="highlight">
                    ${formData.interestedIn}
                  </div>
                </div>
                
                <div class="field">
                  <div class="label">Biggest Operational Challenge</div>
                  <div class="value">${formData.biggestChallenge}</div>
                </div>
                
                ${formData.ready ? '<div class="field"><span class="badge">✓ Ready to get back to doing what they love</span></div>' : ""}
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error("[v0] Resend error:", error)
      return { success: false, message: error.message }
    }

    return { success: true, data }
  } catch (error) {
    console.error("[v0] Error sending email:", error)
    return { success: false, message: "Failed to send email" }
  }
}

export async function sendWhitepaperLeadEmail(formData: WhitepaperFormData) {
  try {
    const resend = await getResendClient()

    if (!resend) {
      console.log("[v0] Mock email send (no API key configured):", formData)
      return {
        success: true,
        data: { id: "mock-email-id" },
        message: "Email simulated successfully (no API key configured)",
      }
    }

    const { data, error } = await resend.emails.send({
      from: "Jo from Enterprise <onboarding@resend.dev>",
      to: ["hello@jofrom.io"],
      replyTo: formData.email,
      subject: `Whitepaper Download - ${formData.company}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #3b82f6 0%, #9333ea 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #475569; margin-bottom: 5px; }
              .value { color: #1e293b; }
              .highlight { background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #3b82f6; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">New Whitepaper Download Lead</h2>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">Enterprise Compliance Whitepaper</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Contact Information</div>
                  <div class="highlight">
                    <strong>${formData.firstName} ${formData.lastName}</strong><br>
                    ${formData.title}<br>
                    <a href="mailto:${formData.email}">${formData.email}</a>
                    ${formData.phone ? `<br><a href="tel:${formData.phone}">${formData.phone}</a>` : ""}
                  </div>
                </div>
                
                <div class="field">
                  <div class="label">Company Details</div>
                  <div class="value">
                    <strong>Company:</strong> ${formData.company}<br>
                    <strong>Industry:</strong> ${formData.industry}<br>
                    <strong>Employee Count:</strong> ${formData.employeeCount}
                  </div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error("[v0] Resend error:", error)
      return { success: false, message: error.message }
    }

    return { success: true, data }
  } catch (error) {
    console.error("[v0] Error sending email:", error)
    return { success: false, message: "Failed to send email" }
  }
}

export async function submitWhitepaperForm(formData: WhitepaperDownloadFormData) {
  try {
    const resend = await getResendClient()

    if (!resend) {
      console.log("[v0] Mock email send (no API key configured):", formData)
      return {
        success: true,
        data: { id: "mock-email-id" },
        message: "Email simulated successfully (no API key configured)",
      }
    }

    const { data, error } = await resend.emails.send({
      from: "Jo from Enterprise Whitepaper <onboarding@resend.dev>",
      to: ["hello@jofrom.io"],
      replyTo: formData.email,
      subject: `Whitepaper Download Request - ${formData.company}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #3b82f6 0%, #9333ea 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #475569; margin-bottom: 5px; }
              .value { color: #1e293b; }
              .highlight { background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #3b82f6; }
              .badge { display: inline-block; background: #3b82f6; color: white; padding: 6px 16px; border-radius: 12px; font-size: 12px; font-weight: bold; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">🎯 New Enterprise Whitepaper Lead</h2>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">Human + Machine Compliance Whitepaper</p>
              </div>
              <div class="content">
                <div class="field">
                  <span class="badge">HOT LEAD</span>
                </div>
                
                <div class="field">
                  <div class="label">Contact Information</div>
                  <div class="highlight">
                    <strong>${formData.firstName} ${formData.lastName}</strong><br>
                    ${formData.jobTitle}<br>
                    <a href="mailto:${formData.email}">${formData.email}</a>
                    ${formData.phone ? `<br><a href="tel:${formData.phone}">${formData.phone}</a>` : ""}
                  </div>
                </div>
                
                <div class="field">
                  <div class="label">Company</div>
                  <div class="value">
                    <strong>${formData.company}</strong>
                  </div>
                </div>
                
                <div class="field" style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e2e8f0;">
                  <p style="color: #64748b; font-size: 14px; margin: 0;">
                    💡 <strong>Next Steps:</strong> This lead downloaded your enterprise whitepaper. 
                    Follow up within 24 hours while interest is high.
                  </p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error("[v0] Resend error:", error)
      return { success: false, message: error.message }
    }

    return { success: true, data }
  } catch (error) {
    console.error("[v0] Error sending email:", error)
    return { success: false, message: "Failed to send email" }
  }
}

interface StrategyDocumentFormData {
  firstName: string
  lastName: string
  email: string
  company: string
  jobTitle: string
  phone?: string
}

export async function sendStrategyDocumentLeadEmail(formData: StrategyDocumentFormData) {
  try {
    const resend = await getResendClient()

    if (!resend) {
      console.log("[v0] Mock email send (no API key configured):", formData)
      return {
        success: true,
        data: { id: "mock-email-id" },
        message: "Email simulated successfully (no API key configured)",
      }
    }

    const { data, error } = await resend.emails.send({
      from: "Jo from Strategy Document <onboarding@resend.dev>",
      to: ["hello@jofrom.io"],
      replyTo: formData.email,
      subject: `Strategy Document Download - ${formData.company}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #3b82f6 0%, #9333ea 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #475569; margin-bottom: 5px; }
              .value { color: #1e293b; }
              .highlight { background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #3b82f6; }
              .badge { display: inline-block; background: #10b981; color: white; padding: 6px 16px; border-radius: 12px; font-size: 12px; font-weight: bold; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">New Strategy Document Lead</h2>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">GTM Strategy Working Session Document</p>
              </div>
              <div class="content">
                <div class="field">
                  <span class="badge">NEW LEAD</span>
                </div>
                
                <div class="field">
                  <div class="label">Contact Information</div>
                  <div class="highlight">
                    <strong>${formData.firstName} ${formData.lastName}</strong><br>
                    ${formData.jobTitle}<br>
                    <a href="mailto:${formData.email}">${formData.email}</a>
                    ${formData.phone ? `<br><a href="tel:${formData.phone}">${formData.phone}</a>` : ""}
                  </div>
                </div>
                
                <div class="field">
                  <div class="label">Company</div>
                  <div class="value">
                    <strong>${formData.company}</strong>
                  </div>
                </div>
                
                <div class="field" style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e2e8f0;">
                  <p style="color: #64748b; font-size: 14px; margin: 0;">
                    This lead downloaded the GTM Strategy Working Session document. 
                    They may be interested in consulting services - follow up to discuss their specific needs.
                  </p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error("[v0] Resend error:", error)
      return { success: false, message: error.message }
    }

    return { success: true, data }
  } catch (error) {
    console.error("[v0] Error sending email:", error)
    return { success: false, message: "Failed to send email" }
  }
}

export async function sendGrowthFormEmail(formData: GrowthFormData) {
  try {
    const resend = await getResendClient()

    if (!resend) {
      console.log("[v0] Mock email send (no API key configured):", formData)
      return {
        success: true,
        data: { id: "mock-email-id" },
        message: "Email simulated successfully (no API key configured)",
      }
    }

    const { data, error } = await resend.emails.send({
      from: "Jo from Growth Consulting <onboarding@resend.dev>",
      to: ["hello@jofrom.io"],
      replyTo: formData.email,
      subject: `Growth Consulting Inquiry - ${formData.company}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #3b82f6 0%, #9333ea 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #475569; margin-bottom: 5px; }
              .value { color: #1e293b; }
              .highlight { background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #3b82f6; }
              .badge { display: inline-block; background: #10b981; color: white; padding: 4px 12px; border-radius: 12px; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">New Growth Consulting Inquiry</h2>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">Sales Pipeline Development</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Contact Information</div>
                  <div class="highlight">
                    <strong>${formData.name}</strong><br>
                    <a href="mailto:${formData.email}">${formData.email}</a><br>
                    <a href="tel:${formData.phone}">${formData.phone}</a>
                  </div>
                </div>
                
                <div class="field">
                  <div class="label">Company Details</div>
                  <div class="value">
                    <strong>Company:</strong> ${formData.company}<br>
                    <strong>Industry:</strong> ${formData.industry}<br>
                    <strong>Annual Revenue:</strong> ${formData.revenue}
                  </div>
                </div>
                
                <div class="field">
                  <div class="label">Service Interest</div>
                  <div class="highlight">
                    ${formData.interest}
                  </div>
                </div>
                
                <div class="field">
                  <div class="label">Biggest Growth Challenge</div>
                  <div class="value">${formData.challenge}</div>
                </div>
                
                ${formData.ready ? '<div class="field"><span class="badge">✓ Ready to build predictable pipeline</span></div>' : ""}
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error("[v0] Resend error:", error)
      return { success: false, message: error.message }
    }

    return { success: true, data }
  } catch (error) {
    console.error("[v0] Error sending email:", error)
    return { success: false, message: "Failed to send email" }
  }
}
