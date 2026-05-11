import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "@/components/layout/LegalShell";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Support",
  description: "FreeClaim support: frequently asked questions.",
};

export default function SupportPage() {
  return (
    <LegalShell eyebrow="Support" title="How can we help?" meta={COMPANY}>
      <h2>Frequently Asked Questions</h2>

      <h3>What is FreeClaim?</h3>
      <p>
        FreeClaim helps you find and file class action settlement claims.
        Companies settle lawsuits and set aside money for affected consumers,
        and most people never claim it. FreeClaim makes it easy to find
        settlements you qualify for and file your claim in minutes.
      </p>

      <h3>How does FreeClaim work?</h3>
      <p>
        Browse available settlements, check eligibility requirements, and file
        claims directly through the official settlement administrator&rsquo;s
        website. We provide the information; you keep the payout.
      </p>

      <h3>Where does the settlement data come from?</h3>
      <p>
        Settlement information is sourced from publicly available court records
        and verified settlement administrator websites. We update our database
        regularly to include new settlements.
      </p>

      <h3>Do I need to provide proof to file a claim?</h3>
      <p>
        It depends on the settlement. Many settlements require no proof at all,
        just your name and email. For settlements that do require
        documentation, the app clearly indicates what&rsquo;s needed.
      </p>

      <h3>How much money can I get?</h3>
      <p>
        Payouts vary by settlement. Individual amounts can range from a few
        dollars to several hundred dollars. The app shows the estimated payout
        amount for each settlement.
      </p>

      <h3>When will I receive my money?</h3>
      <p>
        Settlement payouts are handled by court-appointed administrators, not
        by FreeClaim. Processing times vary but typically range from a few
        weeks to several months after the claim deadline closes.
      </p>

      <h3>Is my data safe?</h3>
      <p>
        Yes. All your data is stored locally on your device. We don&rsquo;t
        operate servers or databases with your personal information. See our{" "}
        <Link href="/privacy">Privacy Policy</Link> for full details.
      </p>

      <h3>How do I delete my account?</h3>
      <p>
        Go to Settings &gt; Delete Account &amp; Data. This permanently removes
        all your locally stored data including saved claims, notes, and account
        information.
      </p>

      <h3>The app isn&rsquo;t showing any settlements.</h3>
      <p>
        Make sure you have an internet connection. The app fetches settlement
        data on launch. If you&rsquo;re seeing cached data, pull down to
        refresh on the browse tab.
      </p>

      <h3>I found a bug or have a suggestion.</h3>
      <p>
        We&rsquo;d love to hear from you. You can leave feedback through the
        App Store or Google Play listing for FreeClaim.
      </p>

      <h2>Legal Disclaimers</h2>
      <p className="disclaimer">
        FreeClaim is not a law firm, does not provide legal advice, and is not
        a substitute for the advice of an attorney. The information provided
        through FreeClaim is for general informational purposes only and does
        not constitute legal, financial, or professional advice of any kind.
      </p>
      <p className="disclaimer">
        Settlement information displayed in the app is sourced from publicly
        available records. While we strive for accuracy, {COMPANY} makes no
        representations or warranties regarding the completeness, accuracy,
        reliability, or availability of any settlement information. Users
        should independently verify all settlement details before filing
        claims.
      </p>
      <p className="disclaimer">
        {COMPANY} is not affiliated with, endorsed by, or connected to any
        court, settlement administrator, class action law firm, or defendant
        in any settlement. Filing a claim through information found on
        FreeClaim does not guarantee any payout.
      </p>
    </LegalShell>
  );
}
