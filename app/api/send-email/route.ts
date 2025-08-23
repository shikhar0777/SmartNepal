import { NextRequest, NextResponse } from 'next/server'
import AWS from 'aws-sdk'

// Configure AWS SDK
AWS.config.update({
  region: 'eu-north-1', // Stockholm
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
})

const ses = new AWS.SES()

export async function POST(req: NextRequest) {
  const { from_name, from_email, subject, message } = await req.json()

  if (!from_name || !from_email || !subject || !message) {
    return NextResponse.json(
      { success: false, error: 'Missing required fields' },
      { status: 400 }
    )
  }

  // Email to you
  const emailToYou = {
    Destination: {
      ToAddresses: ['tech.qsmarte@gmail.com'], // or another inbox
    },
    Message: {
      Body: {
        Text: {
          Data: `Name: ${from_name}\nEmail: ${from_email}\n\nMessage:\n${message}`,
        },
      },
      Subject: { Data: subject },
    },
    Source: 'no-reply@qsmarte.com', // Must be verified
    ReplyToAddresses: [from_email],
  }

  // Auto-reply to sender
  const autoReply = {
    Destination: {
      ToAddresses: [from_email],
    },
    Message: {
      Body: {
        Text: {
          Data: `Hi ${from_name},\n\nThanks for contacting us! We’ve received your message and will respond shortly.\n\nBest,\nQSmarte Team`,
        },
      },
      Subject: { Data: 'We received your message' },
    },
    Source: 'no-reply@qsmarte.com',
  }

  try {
    await ses.sendEmail(emailToYou).promise()
    await ses.sendEmail(autoReply).promise()

    return NextResponse.json({ success: true, message: 'Email sent successfully' })
  } catch (err) {
    console.error('SES error:', err)
    return NextResponse.json({ success: false, error: 'Email failed to send' }, { status: 500 })
  }
}
