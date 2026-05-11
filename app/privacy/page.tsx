import type { Metadata } from "next";
import { LegalShell } from "@/components/layout/LegalShell";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How FreeClaim handles your data.",
};

export default function PrivacyPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Privacy Policy"
      meta={`${COMPANY} · Last updated March 16, 2026`}
    >
      <p>
        FreeClaim respects your privacy. We collect minimal data necessary to
        provide our service.
      </p>

      <h2>Data we collect</h2>
      <ul>
        <li>
          <strong>Account information:</strong> If you sign in with Apple, we
          receive your name and email (or private relay email). Stored locally
          on your device only.
        </li>
        <li>
          <strong>Settlement tracking data:</strong> stored locally on your
          device.
        </li>
        <li>
          <strong>Device advertising identifier (IDFA):</strong> only with your
          explicit consent via Apple&rsquo;s App Tracking Transparency prompt.
        </li>
      </ul>

      <h2>Third-party services</h2>
      <ul>
        <li>
          <strong>Google AdMob:</strong> Displays advertisements. May collect
          device identifiers for ad personalization with your consent.
          Non-personalized ads served by default in EEA/UK.
        </li>
        <li>
          <strong>Sign in with Apple:</strong> Apple processes authentication
          independently.
        </li>
      </ul>

      <h2>Data we do NOT collect</h2>
      <ul>
        <li>Personal financial information or Social Security numbers</li>
        <li>Browsing history outside the App</li>
        <li>We do not sell, rent, or share your personal information</li>
      </ul>
      <p>
        All data is stored locally on your device. We do not operate servers
        or databases that store your personal information. Deletion via
        Settings or app removal is permanent.
      </p>

      <h2>Your rights</h2>
      <ul>
        <li>Opt out of ad personalization via device Settings &rarr; Privacy &rarr; Tracking</li>
        <li>Delete all data via Settings &rarr; Delete Account &amp; Data</li>
        <li>
          <strong>GDPR (EEA/UK):</strong> Right to access, rectify, erase, and
          restrict processing
        </li>
        <li>
          <strong>CCPA (California):</strong> Right to know, delete, and opt
          out of sale (we do not sell data)
        </li>
      </ul>

      <h2>Children&rsquo;s privacy</h2>
      <p>
        FreeClaim is not intended for children under 13. We do not knowingly
        collect data from children.
      </p>

      <h2>Disclaimer</h2>
      <p>
        FreeClaim is not a law firm and does not provide legal advice. TO THE
        MAXIMUM EXTENT PERMITTED BY LAW, {COMPANY.toUpperCase()} SHALL NOT BE
        LIABLE FOR ANY DAMAGES ARISING FROM YOUR USE OF THE APP.
      </p>

      <p>&copy; 2026 {COMPANY}</p>
    </LegalShell>
  );
}
