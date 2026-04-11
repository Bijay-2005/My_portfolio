import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-950">
      <div className="w-full max-w-md mx-4 p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl">
        <div className="flex items-center gap-3 mb-6">
          <AlertCircle className="h-8 w-8 text-red-500" />
          <h1 className="text-2xl font-bold text-white">404 Page Not Found</h1>
        </div>

        <p className="text-slate-400">
          Oops! The cosmic path you're looking for doesn't exist. 
          Did you forget to add the page to the router?
        </p>
        
        <button 
          onClick={() => window.location.href = '/'}
          className="mt-8 w-full py-3 rounded-xl bg-blue-500 text-white font-bold orbitron tracking-widest text-xs hover:bg-blue-600 transition-colors"
        >
          RETURN TO BASE
        </button>
      </div>
    </div>
  );
}
