/**
 * Waitlist submission handler.
 *
 * Currently stores submissions in-memory for development.
 * Replace with your preferred backend:
 *
 * - Supabase: Use @supabase/supabase-js client
 * - Airtable: POST to Airtable API
 * - Resend/SendGrid: Send confirmation email on submit
 */

export interface WaitlistEntry {
  name: string;
  email: string;
  primaryGoal: string;
  features: string[];
  message?: string;
  submittedAt: string;
}

// In-memory store — replace with database connection
const submissions: WaitlistEntry[] = [];

export async function submitWaitlistEntry(entry: Omit<WaitlistEntry, "submittedAt">): Promise<{ success: boolean }> {
  const fullEntry: WaitlistEntry = {
    ...entry,
    submittedAt: new Date().toISOString(),
  };

  // TODO: Replace with actual database insert
  // Example with Supabase:
  //   const { error } = await supabase.from('waitlist').insert(fullEntry);
  //   if (error) return { success: false };

  // TODO: Send confirmation email
  // Example with Resend:
  //   await resend.emails.send({
  //     from: 'TheHomie <hello@thehomie.com>',
  //     to: entry.email,
  //     subject: 'You're on the list',
  //     html: '<p>Welcome to TheHomie early access waitlist.</p>',
  //   });

  submissions.push(fullEntry);
  return { success: true };
}
