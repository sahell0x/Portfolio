export function Footer() {
  return (
    <footer className="py-6 border-t">
      <div className="container px-4 mx-auto">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sahil Khan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}