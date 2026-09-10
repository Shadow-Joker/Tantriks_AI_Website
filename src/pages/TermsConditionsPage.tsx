import { usePageMetadata } from '../hooks/usePageMetadata';
import { LegalPageLayout, type LegalSection } from '../components/legal/LegalPageLayout';

export function TermsConditionsPage() {
  usePageMetadata(
    'Terms & Conditions',
    "These Terms & Conditions govern your use of Tantriks AI's website, services, software, and related offerings."
  );

  const sections: LegalSection[] = [
    {
      id: 'acceptance-of-terms',
      title: 'Acceptance of Terms',
      content: (
        <p>
          By accessing or using the Tantriks AI website, bespoke AI systems, intelligent automation agents, or enterprise software, you agree to be bound by these Terms &amp; Conditions and all applicable laws. If you do not agree with any part of these terms, you must discontinue using our services.
        </p>
      ),
    },
    {
      id: 'about-tantriks-ai',
      title: 'About Tantriks AI',
      content: (
        <p>
          Tantriks AI designs, develops, and deploys custom artificial intelligence systems, workflow automations, intelligent agents, and scalable enterprise software built around the unique operational needs of businesses.
        </p>
      ),
    },
    {
      id: 'use-of-our-services',
      title: 'Use of Our Services',
      content: (
        <p>
          You agree to use our systems only for lawful purposes in accordance with these Terms. You may not use our services to reverse engineer, disrupt, tamper with, or deploy unauthorized autonomous processes that infringe upon third-party rights or compromise system infrastructure.
        </p>
      ),
    },
    {
      id: 'accounts-and-responsibilities',
      title: 'Accounts and User Responsibilities',
      content: (
        <p>
          When you create an account or configure client credentials, you are responsible for maintaining the confidentiality of your authentication details and for all activities that occur under your credentials. Notify us immediately if you suspect unauthorized access.
        </p>
      ),
    },
    {
      id: 'ai-generated-content',
      title: 'AI-Generated Content',
      content: (
        <p>
          Our services utilize artificial intelligence models to synthesize data, automate communication, and process workflows. While we implement safeguards and validation pipelines, AI-generated outputs should be reviewed by qualified human personnel where critical business decisions, clinical, or financial outcomes are involved.
        </p>
      ),
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      content: (
        <p>
          All proprietary algorithms, brand assets, code libraries, and website content belonging to Tantriks AI remain our exclusive intellectual property. Custom bespoke deliverables developed specifically for clients under signed agreements are governed by the terms of those individual client contracts.
        </p>
      ),
    },
    {
      id: 'third-party-services',
      title: 'Third-Party Services',
      content: (
        <p>
          Our solutions may connect to third-party tools, APIs, and cloud services (such as messaging gateways, LLM APIs, and business databases). We do not control or assume liability for third-party service downtime, policy shifts, or API depreciations.
        </p>
      ),
    },
    {
      id: 'payments-and-subscriptions',
      title: 'Payments and Subscriptions',
      content: (
        <p>
          Fees for custom engineering, automation development, and software licenses are specified in individual client proposals or service agreements. Payments must be remitted according to the schedule and terms agreed upon in your invoice or contract.
        </p>
      ),
    },
    {
      id: 'refunds-and-cancellations',
      title: 'Refunds and Cancellations',
      content: (
        <p>
          Cancellation and refund requests are governed by our dedicated <a href="/refund-cancellation" className="text-[#4D694E] underline font-semibold">Refund &amp; Cancellation Policy</a>. Custom development work already rendered is generally non-refundable unless expressly stated in your contract.
        </p>
      ),
    },
    {
      id: 'service-availability',
      title: 'Service Availability',
      content: (
        <p>
          We strive to maintain continuous service availability and high reliability. However, we do not guarantee uninterrupted operation, and services may occasionally be temporarily suspended for scheduled maintenance, updates, or technical anomalies.
        </p>
      ),
    },
    {
      id: 'limitation-of-liability',
      title: 'Limitation of Liability',
      content: (
        <p>
          To the maximum extent permitted by applicable law, Tantriks AI and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities arising from your use of or inability to use our services.
        </p>
      ),
    },
    {
      id: 'indemnification',
      title: 'Indemnification',
      content: (
        <p>
          You agree to defend, indemnify, and hold harmless Tantriks AI and its representatives against any claims, damages, losses, liabilities, and expenses resulting from your violation of these Terms or unauthorized use of our platforms.
        </p>
      ),
    },
    {
      id: 'termination',
      title: 'Termination',
      content: (
        <p>
          We reserve the right to suspend or terminate your access to our services, without prior notice, if you breach these Terms or engage in conduct that jeopardizes the platform or other users.
        </p>
      ),
    },
    {
      id: 'changes-to-terms',
      title: 'Changes to These Terms',
      content: (
        <p>
          Tantriks AI reserves the right to revise or replace these Terms &amp; Conditions at any time. Updates will take effect upon posting to this page with an updated &ldquo;Last Updated&rdquo; revision timestamp.
        </p>
      ),
    },
    {
      id: 'governing-law',
      title: 'Governing Law',
      content: (
        <p>
          These Terms shall be interpreted and governed in accordance with applicable laws, without regard to its conflict of law provisions. [Insert applicable jurisdiction and legal venue as determined by legal counsel].
        </p>
      ),
    },
    {
      id: 'contact',
      title: 'Contact',
      content: (
        <p>
          For legal inquiries, contracts, or notices regarding these Terms &amp; Conditions, please email us at <a href="mailto:tantriksai2026@gmail.com" className="text-[#4D694E] underline font-semibold">tantriksai2026@gmail.com</a>.
        </p>
      ),
    },
  ];

  return (
    <LegalPageLayout
      title="Terms & Conditions"
      lastUpdated="September 10, 2026"
      intro="These Terms & Conditions govern your use of Tantriks AI's website, services, software, and related offerings."
      sections={sections}
    />
  );
}
