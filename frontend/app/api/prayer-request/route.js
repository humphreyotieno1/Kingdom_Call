import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD
  }
});

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email content with styled template
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'wearekingdomcall@gmail.com',
      subject: `New Prayer Request from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Prayer Request</title>
          </head>
          <body style="margin: 0; padding: 0; background-color: #f6f9fc; font-family: Arial, sans-serif;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background-color: #ffffff; border-radius: 10px; padding: 30px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                <!-- Header with Prayer Request specific styling -->
                <div style="text-align: center; margin-bottom: 30px;">
                  <h2 style="color: #E48515; margin: 0; font-size: 24px; font-weight: bold;">New Prayer Request</h2>
                  <div style="width: 60px; height: 3px; background-color: #E48515; margin: 15px auto;"></div>
                  <p style="color: #666666; margin-top: 10px; font-size: 16px;">A new prayer request has been submitted.</p>
                </div>

                <!-- Divider -->
                <div style="border-top: 1px solid #e8e8e8; margin: 20px 0;"></div>

                <!-- Requester Information -->
                <div style="margin-bottom: 20px;">
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                        <strong style="color: #333333; font-size: 16px;">From:</strong>
                        <div style="color: #666666; margin-top: 5px;">${name}</div>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                        <strong style="color: #333333; font-size: 16px;">Email:</strong>
                        <div style="color: #666666; margin-top: 5px;">${email}</div>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                        <strong style="color: #333333; font-size: 16px;">Phone:</strong>
                        <div style="color: #666666; margin-top: 5px;">${phone}</div>
                      </td>
                    </tr>
                  </table>
                </div>

                <!-- Prayer Request Content -->
                <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; margin-top: 20px;">
                  <strong style="color: #333333; font-size: 16px; display: block; margin-bottom: 10px;">Prayer Request:</strong>
                  <div style="color: #666666; line-height: 1.6; white-space: pre-wrap;">${message}</div>
                </div>

                <!-- Scripture Quote -->
                <div style="margin-top: 30px; padding: 15px; background-color: #fff5e6; border-left: 4px solid #E48515; border-radius: 4px;">
                  <p style="color: #666666; font-style: italic; margin: 0;">
                    "Therefore I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours." - Mark 11:24
                  </p>
                </div>

                <!-- Footer -->
                <div style="margin-top: 30px; text-align: center; color: #999999; font-size: 14px;">
                  <p style="margin: 0;">This is an automated message from your website's prayer request form.</p>
                  <p style="margin: 5px 0 0 0;">© ${new Date().getFullYear()} Kingdom Call</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Prayer request submitted successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending prayer request:', error);
    return NextResponse.json(
      { error: 'Failed to submit prayer request. Please try again.' },
      { status: 500 }
    );
  }
}