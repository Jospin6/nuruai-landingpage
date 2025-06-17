export const dynamic = 'force-dynamic';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: NextResponse) {
    const body = await req.json();
    const {name, subject, budget, email, message } = body;
  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: ['jospinndagano1@gmail.com'],
    subject: `Lead Message: ${subject}`,
    html: `<div> <p>Nom: ${name}</p> <p>Budget: ${budget}</p> <p> ${message} </p> <p><strong>from email:</strong> ${email}</p> </div>`,
  });

  if (error) {
    return NextResponse.json(error)
  }

  return NextResponse.json(data)
};