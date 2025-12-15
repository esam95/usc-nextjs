import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const PLACE_ID = process.env.GOOGLE_PLACE_ID;
    const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,user_ratings_total,reviews&language=sv&key=${GOOGLE_API_KEY}`;

    const response = await fetch(url);
    
    const data = await response.json();
    
    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Error message:', error.message);    
    return NextResponse.json(
      { error: 'Failed to fetch reviews', details: error.message },
      { status: 500 }
    );
  }
}