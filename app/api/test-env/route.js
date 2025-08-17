import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    emailUser: process.env.EMAIL_USER ? 'Set' : 'Not set',
    emailPass: process.env.EMAIL_PASS ? 'Set' : 'Not set',
    nodeEnv: process.env.NODE_ENV || 'development'
  });
}
