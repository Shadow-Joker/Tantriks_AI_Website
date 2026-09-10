import { usePageMetadata } from '../hooks/usePageMetadata';
import { LegalPageLayout, type LegalSection } from '../components/legal/LegalPageLayout';

export function PrivacyPolicyPage() {
  usePageMetadata(
    'Privacy Policy',
    'At Tantriks AI, we respect your privacy and are committed to protecting the information you share with us.'
  );

  const sections: LegalSection[] = [
    {
      id: 'information-we-collect',
      title: 'Information We Collect',
      content: (
        <>
          <p>
            We collect information you provide directly to us when inquiring about our services, communicating with our team, or engaging with our custom AI and software solutions. This may include contact details such as your name, business email address, phone number, company name, and project specifications.
          </p>
          <p>
            Additionally, when you access our website or platform, we may automatically collect limited technical information such as browser type, operating system, IP address, device telemetry, and interaction metrics to ensure optimal system performance and security.
          </p>
        </>
      ),
    },
    {
      id: 'how-we-use-information',
      title: 'How We Use Information',
      content: (
        <>
          <p>Tantriks AI uses the information we collect solely for legitimate business purposes, including:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Designing, developing, and deploying bespoke AI agents, automation workflows, and software systems.</li>
            <li>Responding to inquiries, partnerships requests, and customer support communications.</li>
            <li>Maintaining the security, performance, and operational integrity of our services.</li>
            <li>Sending critical technical notices, updates, and administrative communications.</li>
          </ul>
        </>
      ),
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing',
      content: (
        <>
          <p>
            We do not sell, rent, or trade your personal or business data. We only share information in limited circumstances, such as:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>With trusted infrastructure service providers who support our hosting, communication, and development operations under strict confidentiality terms.</li>
            <li>To comply with applicable legal processes, valid government requests, or court orders.</li>
            <li>To protect the rights, security, and intellectual property of Tantriks AI, our clients, or the public.</li>
          </ul>
        </>
      ),
    },
    {
      id: 'data-security',
      title: 'Data Security',
      content: (
        <>
          <p>
            We implement industry-standard technical, organizational, and administrative safeguards designed to protect your data against unauthorized access, loss, alteration, or misuse. This includes encrypted communications, access control hierarchies, and routine security audits.
          </p>
          <p>
            While no method of electronic transmission or storage is 100% immune to vulnerabilities, we continuously evolve our defensive measures to safeguard your operational information.
          </p>
        </>
      ),
    },
    {
      id: 'data-retention',
      title: 'Data Retention',
      content: (
        <p>
          We retain personal and business information only for as long as necessary to fulfill the purposes outlined in this policy, satisfy contractual commitments, resolve disputes, and comply with applicable statutory retention requirements. When data is no longer required, it is securely deleted or anonymized.
        </p>
      ),
    },
    {
      id: 'cookies-similar-technologies',
      title: 'Cookies and Similar Technologies',
      content: (
        <p>
          We use cookies and similar technologies to facilitate essential website operations, analyze interaction patterns, and preserve user preferences. You can manage your preferences at any time by visiting our dedicated <a href="/cookie-preferences" className="text-[#4D694E] underline font-semibold">Cookie Preferences</a> page.
        </p>
      ),
    },
    {
      id: 'third-party-services',
      title: 'Third-Party Services',
      content: (
        <p>
          Our services and website may contain references or integrations to third-party platforms, APIs, or tools. Tantriks AI is not responsible for the privacy practices or content of external providers, and we encourage you to review their respective privacy notices when utilizing external tools.
        </p>
      ),
    },
    {
      id: 'your-privacy-rights',
      title: 'Your Privacy Rights',
      content: (
        <>
          <p>
            Depending on your jurisdiction, you may have rights regarding your personal information, including the right to request access, correction, deletion, or restriction of your data.
          </p>
          <p>
            To exercise any applicable rights or make inquiries concerning your data, please contact our privacy representative at <a href="mailto:tantriksai2026@gmail.com" className="text-[#4D694E] underline font-semibold">tantriksai2026@gmail.com</a>.
          </p>
        </>
      ),
    },
    {
      id: 'childrens-privacy',
      title: "Children's Privacy",
      content: (
        <p>
          Our website, automation solutions, and enterprise software are intended solely for business professionals and individuals aged 18 and older. We do not knowingly collect or solicit personal data from children under the age of 16.
        </p>
      ),
    },
    {
      id: 'changes-to-policy',
      title: 'Changes to This Privacy Policy',
      content: (
        <p>
          We may update this Privacy Policy from time to time to reflect modifications in our operational practices, technological developments, or applicable regulations. Any updates will be posted directly to this page with an amended &ldquo;Last Updated&rdquo; date.
        </p>
      ),
    },
    {
      id: 'contact-us',
      title: 'Contact Us',
      content: (
        <p>
          If you have questions, feedback, or concerns regarding this Privacy Policy or our data handling practices, please write to us at <a href="mailto:tantriksai2026@gmail.com" className="text-[#4D694E] underline font-semibold">tantriksai2026@gmail.com</a>.
        </p>
      ),
    },
  ];

  return (
    <LegalPageLayout
      title="Privacy Policy"
      lastUpdated="September 10, 2026"
      intro="At Tantriks AI, we respect your privacy and are committed to protecting the information you share with us."
      sections={sections}
    />
  );
}
