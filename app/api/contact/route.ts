import { NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const data = contactSchema.parse(payload);

    console.info('New contact request received', data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to submit contact form', error);
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
  }
}
