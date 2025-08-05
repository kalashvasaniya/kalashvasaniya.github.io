import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    const uri = process.env.MONGODB_URI;
    if (!uri) {
      return NextResponse.json(
        { error: 'Database connection not configured' },
        { status: 500 }
      );
    }

    const client = new MongoClient(uri);
    await client.connect();

    const db = client.db();
    const collection = db.collection('subscribers');

    // Check if email already exists
    const existingSubscriber = await collection.findOne({ email: email.toLowerCase() });
    
    if (existingSubscriber) {
      await client.close();
      return NextResponse.json(
        { error: 'Email already subscribed' },
        { status: 409 }
      );
    }

    // Add new subscriber
    await collection.insertOne({
      email: email.toLowerCase(),
      subscribedAt: new Date(),
      isActive: true
    });

    await client.close();

    return NextResponse.json(
      { message: 'Successfully subscribed!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    );
  }
} 