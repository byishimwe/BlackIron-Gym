import PageHero from '../components/PageHero';
import Button from '../components/Button';

function NotFound() {
  return (
    <div className="bg-brand-black text-brand-bone min-h-[70vh] flex flex-col justify-between">
      <PageHero
        eyebrow="404 — Page Not Found"
        title="Off The Training Floor"
        description="The page you are looking for does not exist or has been relocated."
      />

      <div className="py-20 max-w-content mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-brand-muted text-base mb-8 max-w-md mx-auto">
          Head back to the main training floor or explore our scheduled disciplines and membership plans.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button to="/" variant="primary" size="lg">
            Return to Homepage
          </Button>
          <Button to="/classes" variant="secondary" size="lg">
            Explore Classes
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
