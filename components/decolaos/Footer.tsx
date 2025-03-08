"use client";

interface FooterProps {
  copyright?: string;
}

export function Footer({ copyright = "© 2025 Toolzz. Projeto Decola 25." }: FooterProps) {
  return (
    <footer className="w-full border-t border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-gray-500">
          {copyright}
        </p>
      </div>
    </footer>
  );
} 