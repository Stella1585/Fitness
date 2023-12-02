import React from "react";

export default function TermsPage() {
  return (
    <div className="container mx-auto p-8">
      <section className="mb-8">
        <h2 className="text-3xl font-bold">Terms of Service</h2>
      </section>

      <header className="mb-6">
        <h1 className="text-3xl font-bold">FitSphere Web App Usage Policy</h1>
      </header>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2">Introduction</h2>
        <p>
          This policy outlines the acceptable use of FitSphere (the &quot;App&quot;), a
          platform serving clients, fitness trainers, and managers within the
          fitness industry.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2">User Obligations</h2>
        <ul className="list-disc pl-6">
          <li>Users must provide accurate and current information at all times.</li>
          <li>Users are responsible for maintaining the confidentiality of their account and password.</li>
          <li>Users agree to use the App for lawful purposes only.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2">Data Protection</h2>
        <p>
          The App is committed to protecting user data in accordance with applicable data protection laws. Users&apos; personal information will be collected, used, and disclosed as outlined in our Privacy Policy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2">Intellectual Property</h2>
        <p>
          All content provided on the App is the property of InnovaSphere or its licensors and is protected by intellectual property laws.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2">Prohibited Activities</h2>
        <ul className="list-disc pl-6">
          <li>Users must not misuse the App by knowingly introducing viruses, trojans, or other material that is malicious or technologically harmful.</li>
          <li>Attempting unauthorized access to the App, the server on which the App is stored, or any server, computer, or database connected to the App is prohibited.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2">Amendments</h2>
        <p>InnovaSphere reserves the right to amend this policy at any time.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2">Termination</h2>
        <p>
          InnovaSphere may terminate or suspend access to the App immediately, without prior notice or liability, for any breach of this policy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2">Contact Information</h2>
        <p>
          For any questions about this policy, please contact [Insert Contact Information Here].
        </p>
      </section>

      <footer className="text-center">
        <p>© [Year] InnovaSphere. All rights reserved.</p>
      </footer>
    </div>
  );
}
