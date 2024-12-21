import { Shield, Lock, CheckCircle } from "lucide-react";

const SecuritySection = () => {
  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Your Patients' Privacy is Our Priority
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We understand how important patient confidentiality is
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-white border border-emerald-100 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              HIPAA Compliant
            </h3>
            <p className="text-slate-600">
              Full compliance with healthcare privacy regulations
            </p>
          </div>
          
          <div className="p-6 rounded-xl bg-white border border-emerald-100 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
              <Lock className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              End-to-End Encryption
            </h3>
            <p className="text-slate-600">
              Your data is protected at every step
            </p>
          </div>
          
          <div className="p-6 rounded-xl bg-white border border-emerald-100 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
              <CheckCircle className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Trusted Solution
            </h3>
            <p className="text-slate-600">
              Used by leading healthcare providers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;