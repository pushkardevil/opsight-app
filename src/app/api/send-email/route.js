// pages/api/send-email.js

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req, res) {
  const postData = await req.json();
  const transporter = nodemailer.createTransport({
    host: "smtppro.zoho.in",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "pushkarkumar@opsight.ai", // your Zoho email address
      pass: "pushkardevil044$$", // your Zoho email password
    },
  });

  try {
    await transporter.sendMail({
      from: `"Opsight AI" <pushkarkumar@opsight.ai>`, // sender address
      to: "pushkarkumar@opsight.ai", // list of receivers
      replyTo: postData.user_email, // reply-to address
      subject: "New Contact Form Submission", // Subject line
      text: `Name: ${postData.from_name} ${postData.last_name}\nEmail: ${postData.user_email}\nMessage: ${postData.message}`, // plain text body
      html: `<p>Name: ${postData.from_name} ${postData.last_name}</p><p>Email: ${postData.user_email}</p><p>Message: ${postData.message}</p>`, // html body
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email",success:false });
  }
}
