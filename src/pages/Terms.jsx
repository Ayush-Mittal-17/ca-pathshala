const Terms = () => {
  return (
    <div className="container mx-auto py-16 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

      <p className="text-sm text-muted-foreground mb-6">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <p className="mb-4">
        By using CA Pathshala, you agree to the following terms and conditions.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Course Access</h2>
      <p className="mb-4">
        Access to purchased courses is granted for a limited time and is for personal use only.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Payments & Refunds</h2>
      <p className="mb-4">
        All payments are final unless stated otherwise. Refund policies will be clearly mentioned during purchase.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. User Conduct</h2>
      <p className="mb-4">
        You agree not to misuse the platform, share content illegally, or harm the platform in any way.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Intellectual Property</h2>
      <p className="mb-4">
        All course materials are owned by CA Pathshala and cannot be redistributed without permission.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Changes to Terms</h2>
      <p>
        We may update these terms at any time. Continued use of the platform means you accept the changes.
      </p>
    </div>
  );
};

export default Terms;