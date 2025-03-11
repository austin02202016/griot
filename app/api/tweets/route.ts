import { NextResponse } from "next/server";
import tweetData from "./tweet_data/advay_3_11.json";

export async function GET() {
  // Return the imported JSON data as the response
  return NextResponse.json(tweetData);
}