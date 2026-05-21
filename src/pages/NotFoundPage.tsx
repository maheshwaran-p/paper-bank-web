import { Link } from "react-router-dom";
import Container from "../components/Container";

export default function NotFoundPage() {
  return (
    <section className="py-20">
      <Container className="text-center">
        <div className="mx-auto max-w-xl">
          <div className="text-sm font-semibold text-slate-500">404</div>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Page not found
          </h1>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            The page you’re looking for doesn’t exist.
          </p>
          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-900 px-5 text-sm font-bold text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
            >
              Back to home
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

