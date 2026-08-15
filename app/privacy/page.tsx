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
      meta={`${COMPANY} · Last updated August 15, 2026`}
    >
      <p>
        FreeClaim respects your privacy. This policy explains what remains on
        your device and what limited data is processed by service providers.
      </p>

      <h2>Data stored on your device</h2>
      <ul>
        <li>
          Saved settlements, claim status, notes, and notification preferences.
        </li>
        <li>
          <strong>iOS account information:</strong> If you use Sign in with
          Apple, your name and email (or private relay email) are stored locally.
        </li>
        <li>
          <strong>Android legacy account information:</strong> Google account
          information only if you signed in through an earlier App version.
        </li>
      </ul>

      <h2>Data processed by service providers</h2>
      <ul>
        <li>
          <strong>Firebase Analytics:</strong> App interactions such as screens
          viewed, settlement IDs viewed or saved, claim-status actions, app
          language, and general app/device information. FreeClaim does not send
          your notes, claim-form contents, or search text to analytics.
        </li>
        <li>
          <strong>Firebase Crashlytics:</strong> Crash reports, diagnostics,
          performance information, and app/device information used to improve
          reliability.
        </li>
        <li>
          <strong>Google AdMob:</strong> Advertising and related measurement
          data, including device identifiers where permitted by consent and
          device settings. On iOS, IDFA is available only after any consent
          required by Apple.
        </li>
        <li>
          <strong>Meta App Events:</strong> App installation and activation
          events, general app/device information, IP address, and device
          identifiers where permitted by consent and device settings. This is
          used to measure and attribute FreeClaim app-promotion campaigns; it
          does not display ads in the App.
        </li>
        <li>
          <strong>Firebase Remote Config:</strong> App configuration requests
          and associated technical information.
        </li>
        <li>
          <strong>Firebase Authentication:</strong> Legacy Android account
          authentication and deletion if you signed in through an earlier App
          version.
        </li>
        <li>
          <strong>Sign in with Apple:</strong> Apple processes authentication
          independently.
        </li>
      </ul>
      <p>
        These services may process IP addresses and other technical information
        as part of providing their services. This data is governed by the
        applicable Google, Firebase, Meta, and Apple terms and retention
        practices.
      </p>

      <h2>Data we do not request</h2>
      <ul>
        <li>Bank account, payment-card, Social Security, or claim-form information</li>
        <li>Browsing history outside the App</li>
      </ul>
      <p>
        FreeClaim does not sell or rent personal information. We share limited
        data with the service providers described above to operate, analyze,
        secure, and support the App. We do not operate our own database
        containing your saved claims or notes.
      </p>

      <h2>Deletion and choices</h2>
      <ul>
        <li>
          Delete locally stored claims and notes through available App settings
          or by removing the App. Account deletion is available where an account
          exists.
        </li>
        <li>
          Use device privacy controls and FreeClaim&rsquo;s privacy settings,
          where available, to manage tracking and advertising choices.
        </li>
        <li>
          Deleting local App data does not automatically delete analytics or
          diagnostic data already processed by service providers. Their
          retention and deletion practices apply.
        </li>
        <li>
          <strong>GDPR (EEA/UK) and CCPA/CPRA (California):</strong> Applicable
          rights may include access, correction, deletion, restriction, and
          opting out of sale or sharing. FreeClaim does not sell personal
          information.
        </li>
      </ul>

      <h2>Children&rsquo;s privacy</h2>
      <p>
        FreeClaim is not intended for children under 13, and we do not knowingly
        collect personal information from children.
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
