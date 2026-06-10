import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-background dot-grid flex items-center justify-center px-4 relative overflow-hidden">
      <div className="ambient-orb w-96 h-96 bg-primary opacity-10 -top-20 -right-20" />
      <div className="ambient-orb w-72 h-72 bg-accent opacity-10 bottom-0 left-0" />
      <div className="relative z-10">
        <SignUp
          appearance={{
            variables: {
              colorPrimary: '#2ea3f2',
              colorBackground: '#0d1421',
              colorInputBackground: '#111827',
              colorInputText: '#f0f4f8',
              colorText: '#f0f4f8',
              colorTextSecondary: '#94a3b8',
              borderRadius: '0.75rem',
            },
          }}
        />
      </div>
    </div>
  );
}
