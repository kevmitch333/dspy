import { NextResponse } from "next/server";
import { submitWaitlistEntry } from "@/lib/waitlist";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, primaryGoal, features, message } = body;

    if (!name || !email || !primaryGoal) {
      return NextResponse.json(
        { success: false, error: "Name, email, and primary goal are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    const result = await submitWaitlistEntry({
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      primaryGoal: String(primaryGoal),
      features: Array.isArray(features) ? features.map(String) : [],
      message: message ? String(message).trim() : undefined,
    });

    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      { success: false, error: "Something went wrong." },
      { status: 500 }
    );
  }
}
