const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto py-16 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="text-sm text-muted-foreground mb-6">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <p className="mb-4">
        At CA Pathshala, we respect your privacy and are committed to protecting your personal information.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        We may collect your name, phone number, email address, and course preferences when you contact us or enroll in a course.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc pl-5 mb-4 space-y-1">
        <li>To provide course access and support</li>
        <li>To communicate updates and offers</li>
        <li>To improve our services</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Protection</h2>
      <p className="mb-4">
        We implement appropriate security measures to protect your data. However, no method of transmission over the internet is 100% secure.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Third-Party Services</h2>
      <p className="mb-4">
        We may use third-party tools like payment gateways or analytics services, which have their own privacy policies.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Contact Us</h2>
      <p>
        If you have any questions, contact us via WhatsApp or email.
      </p>
    </div>
  );
};

export default PrivacyPolicy;