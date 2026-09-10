import { usePageMetadata } from '../hooks/usePageMetadata';
import { LegalPageLayout, type LegalSection } from '../components/legal/LegalPageLayout';

export function RefundCancellationPage() {
  usePageMetadata(
    'Refund & Cancellation Policy',
    'We want you to have a clear understanding of our cancellation and refund process.'
  );

  const sections: LegalSection[] = [
    {
      id: 'cancellation',
      title: 'Cancellation',
      content: (
        <p>
          Clients may request project cancellation by submitting written notice to our operational team. For custom software engineering and bespoke AI agent builds, cancellation terms are subject to the project milestones, deliverables, and terms outlined in your specific contract agreement.
        </p>
      ),
    },
    {
      id: 'subscription-cancellation',
      title: 'Subscription Cancellation',
      content: (
        <p>
          For ongoing retainer, hosting, or software-as-a-service arrangements, you may cancel your subscription at any time prior to the next billing cycle. Cancellation will become effective at the conclusion of the currently active paid billing period.
        </p>
      ),
    },
    {
      id: 'refund-eligibility',
      title: 'Refund Eligibility',
      content: (
        <p>
          Refund eligibility depends on the type of service engaged. Because bespoke AI models, agent swarms, and custom enterprise software require dedicated engineering resources, refunds are evaluated on a case-by-case basis within [Insert applicable refund period, e.g., 14 days] of project initiation, subject to milestone completion.
        </p>
      ),
    },
    {
      id: 'refund-requests',
      title: 'Refund Requests',
      content: (
        <p>
          To request a refund, please send a written request including your invoice number, account details, and the reason for your request to <a href="mailto:tantriksai2026@gmail.com" className="text-[#4D694E] underline font-semibold">tantriksai2026@gmail.com</a>. All requests are reviewed within [Insert business review timeline, e.g., 5-7 business days].
        </p>
      ),
    },
    {
      id: 'processing-times',
      title: 'Processing Times',
      content: (
        <p>
          Approved refunds will be processed using the original method of payment within [Insert applicable processing window, e.g., 7-10 business days], subject to bank or payment gateway settlement timelines.
        </p>
      ),
    },
    {
      id: 'non-refundable-charges',
      title: 'Non-Refundable Charges',
      content: (
        <>
          <p>The following categories of fees are generally non-refundable:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Completed engineering sprints and approved milestone deliverables.</li>
            <li>Third-party API consumption costs (e.g., model token expenses, cloud telephony, SMS verification usage).</li>
            <li>Setup, discovery workshop, and architectural evaluation fees once work has commenced.</li>
          </ul>
        </>
      ),
    },
    {
      id: 'service-termination',
      title: 'Service Termination',
      content: (
        <p>
          Tantriks AI reserves the right to terminate or suspend access to services immediately if terms of engagement are breached, without obligation to issue refunds for prior billing intervals.
        </p>
      ),
    },
    {
      id: 'changes-to-policy',
      title: 'Changes to This Policy',
      content: (
        <p>
          We may modify or amend this Refund &amp; Cancellation Policy at any time. Any changes will be published here with an updated &ldquo;Last Updated&rdquo; date.
        </p>
      ),
    },
    {
      id: 'contact-us',
      title: 'Contact Us',
      content: (
        <p>
          If you have any questions regarding cancellations, invoicing, or refunds, please reach out to our billing team at <a href="mailto:tantriksai2026@gmail.com" className="text-[#4D694E] underline font-semibold">tantriksai2026@gmail.com</a>.
        </p>
      ),
    },
  ];

  return (
    <LegalPageLayout
      title="Refund & Cancellation Policy"
      lastUpdated="September 10, 2026"
      intro="We want you to have a clear understanding of our cancellation and refund process."
      sections={sections}
    />
  );
}
