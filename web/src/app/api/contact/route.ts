import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    /**
     * TODO: Integrate your preferred notification method here.
     *
     * Options:
     *   - Email via Resend: https://resend.com
     *   - Email via Nodemailer
     *   - CRM webhook (HubSpot, Pipedrive, etc.)
     *   - Slack / Teams notification
     *   - Booking tool (Calendly, etc.)
     *
     * Example with Resend:
     *   const resend = new Resend(process.env.RESEND_API_KEY);
     *   await resend.emails.send({
     *     from: "website@rescueflex.ch",
     *     to: "info@rescueflex.ch",
     *     subject: `Neue Anfrage von ${data.name}`,
     *     text: `...`,
     *   });
     */

    console.info("[contact] New enquiry from:", data.email, "| service:", data.service);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid form data", details: error.issues }, { status: 400 });
    }
    console.error("[contact] Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
