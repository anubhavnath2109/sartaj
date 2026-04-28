import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-bg dot-grid">
      <div className="w-full max-w-md relative">
        {/* Decorative gold bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gold opacity-40 z-10" />

        <div className="text-center mb-8">
          <span className="font-[family-name:var(--font-headline)] text-4xl text-gold tracking-widest block mb-1">
            SARTAJ
          </span>
          <div className="label-accent text-[10px] text-muted tracking-[0.3em]">
            RESTRICTED ACCESS
          </div>
        </div>

        <SignIn
          fallbackRedirectUrl="/admin/dashboard"
          appearance={{
            elements: {
              rootBox: "w-full",
              cardBox: "w-full shadow-none",
              card: "bg-surface border border-border shadow-none w-full",
              headerTitle: "font-[family-name:var(--font-headline)] tracking-wider",
              headerSubtitle: "text-muted",
              formButtonPrimary:
                "bg-gold hover:bg-gold-dark text-bg uppercase tracking-[0.15em] font-semibold text-sm",
              formFieldInput:
                "bg-transparent border-0 border-b border-border focus:border-gold text-text",
              footerActionLink: "text-gold hover:text-gold-light",
              identityPreview: "bg-surface-alt border-border",
              formFieldLabel: "label-accent text-muted",
            },
          }}
        />

        <div className="mt-6 text-center">
          <p className="label-accent text-[9px] text-muted opacity-50">
            AUTHORIZED PERSONNEL ONLY. ALL ACCESS ATTEMPTS ARE LOGGED AND
            MONITORED.
          </p>
        </div>
      </div>
    </main>
  );
}
