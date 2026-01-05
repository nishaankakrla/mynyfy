
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { ArrowRight, Mail, Lock, Store, Loader2 } from 'lucide-react';

export const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [brandName, setBrandName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // 1. Sign up user
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    if (authData.user) {
      // 2. Create brand
      const { data: brandData, error: brandError } = await supabase
        .from('brands')
        .insert({
          name: brandName,
          owner_id: authData.user.id
        })
        .select()
        .single();

      if (brandError) {
        setError("User created, but brand creation failed. Please login to complete setup.");
        setLoading(false);
        return;
      }

      // 3. Add user as Owner in brand_members
      const { error: memberError } = await supabase
        .from('brand_members')
        .insert({
          brand_id: brandData.id,
          user_id: authData.user.id,
          role: 'owner'
        });

      if (memberError) {
        setError("Failed to initialize workspace permissions.");
        setLoading(false);
        return;
      }

      navigate('/app/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EAF3FF] p-6">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-[24px] shadow-2xl shadow-blue-200/50 p-10">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold text-blue-600 mb-2">CommerceOS</h1>
            <p className="text-slate-500 font-medium">Build your fashion empire.</p>
          </div>

          <form onSubmit={handleSignup} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Brand Name</label>
              <div className="relative">
                <Store className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  required
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 rounded-[16px] pl-12 pr-4 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  placeholder="Atelier V"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 rounded-[16px] pl-12 pr-4 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  placeholder="ceo@brand.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 rounded-[16px] pl-12 pr-4 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-50 text-red-600 text-sm p-4 rounded-[12px] border border-red-100">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-[16px] shadow-lg shadow-blue-200 flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-70"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Launch Workspace <ArrowRight className="w-5 h-5" /></>}
            </button>
          </form>

          <p className="mt-8 text-center text-slate-500 font-medium">
            Already a member?{' '}
            <Link to="/login" className="text-blue-600 hover:underline">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
