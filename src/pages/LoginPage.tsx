import React from "react";
import { Eye, EyeOff, CheckCircle2, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function LoginPage() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [rememberMe, setRememberMe] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo-day behaviour: no real auth, just go to dashboard
    console.log("Demo login:", { email, rememberMe });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen w-full bg-[#F4F4F4] flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Login Card */}
        <div className="w-full max-w-md mx-auto lg:mx-0">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 space-y-6">
            {/* Branding Area */}
            <div className="text-center space-y-4">
              {/* Qode+ logo (same as sidebar) */}
              <div className="flex justify-center mb-2">
                <p className="font-['Familjen_Grotesk',sans-serif] font-bold text-[36px] leading-normal">
                  <span className="text-[#EFBC02]">Q</span>
                  <span className="text-[#01416C]">ode</span>
                  <span className="text-[#E92E16]">+</span>
                </p>
              </div>

              {/* Product Name */}
              <div>
                <h1 className="text-[#05466C] mb-2 text-xl md:text-2xl">
                  Impact Ledger
                </h1>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  Manage product impact and compliance data.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#E5E7EB]" />

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-[#111827]"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 px-4 border-[#E5E7EB] rounded-lg focus:border-[#05466C] focus:ring-[#05466C]"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-[#111827]"
                >
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full h-12 px-4 pr-12 border-[#E5E7EB] rounded-lg focus:border-[#05466C] focus:ring-[#05466C]"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-[#F3F4F6] rounded transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="size-5 text-[#6B7280]" />
                    ) : (
                      <Eye className="size-5 text-[#6B7280]" />
                    )}
                  </button>
                </div>
              </div>

              {/* Form Options Row */}
              <div className="flex items-center justify-between">
                {/* Remember Me */}
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) =>
                      setRememberMe(!!checked)
                    }
                    className="border-[#E5E7EB] data-[state=checked]:bg-[#05466C] data-[state=checked]:border-[#05466C]"
                  />
                  <Label
                    htmlFor="remember"
                    className="text-sm text-[#6B7280] cursor-pointer"
                  >
                    Remember me
                  </Label>
                </div>

                {/* Forgot Password */}
                <button
                  type="button"
                  className="text-sm text-[#05466C] hover:text-[#003C65] font-medium transition-colors"
                >
                  Forgot password?
                </button>
              </div>

              {/* Sign In Button */}
              <Button
  type="button"
  onClick={() => navigate("/dashboard")}
  className="w-full h-12 bg-[#05466C] hover:bg-[#003C65] text-white rounded-lg transition-all shadow-md hover:shadow-lg"
>
  Sign in
</Button>


              {/* Footer Text */}
              <p className="text-xs text-center text-[#9CA3AF] leading-relaxed pt-2">
                By signing in, you agree to Qode+ terms and data usage for ESG
                analytics.
              </p>

              <p className="text-xs text-center text-[#9CA3AF] pt-2">
                © 2024 Qode+ Impact Ledger • Version 2.4.1
              </p>
            </form>
          </div>

          {/* Additional Links */}
          <div className="text-center mt-6">
            <p className="text-sm text-[#6B7280]">
              Don&apos;t have an account?{" "}
              <button className="text-[#05466C] hover:text-[#003C65] font-medium transition-colors">
                Contact your administrator
              </button>
            </p>
          </div>
        </div>

        {/* Side Hero Panel - Desktop Only */}
        <div className="hidden lg:block">
          <div className="bg-gradient-to-br from-[#05466C] to-[#003C65] rounded-2xl p-10 shadow-2xl text-white space-y-8">
            {/* Hero Title */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="size-6 text-[#F0B82E]" />
                <h2 className="text-white">Why Qode+?</h2>
              </div>
              <p className="text-[#E0E7FF] leading-relaxed">
                The comprehensive platform for sustainability impact management
                across all product categories.
              </p>
            </div>

            {/* Feature Bullets */}
            <div className="space-y-5">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#F0B82E] rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="size-5 text-[#05466C]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    Track product impact across the lifecycle
                  </h4>
                  <p className="text-sm text-[#E0E7FF] leading-relaxed">
                    Monitor emissions, materials, and circularity from raw
                    materials to end-of-life.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#F0B82E] rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="size-5 text-[#05466C]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    Connect FMCG, BCRS, and beauty data in one place
                  </h4>
                  <p className="text-sm text-[#E0E7FF] leading-relaxed">
                    Unified platform for managing food products, beverage
                    containers, and cosmetics impact data.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#F0B82E] rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="size-5 text-[#05466C]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    Use AI to detect hotspots and compliance risks
                  </h4>
                  <p className="text-sm text-[#E0E7FF] leading-relaxed">
                    Machine learning identifies emission hotspots, supplier
                    risks, and optimization opportunities.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="pt-6 border-t border-white/20">
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#F0B82E] mb-1">10K+</p>
                  <p className="text-xs text-[#E0E7FF]">Products Tracked</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#F0B82E] mb-1">500+</p>
                  <p className="text-xs text-[#E0E7FF]">Organizations</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#F0B82E] mb-1">98%</p>
                  <p className="text-xs text-[#E0E7FF]">Accuracy</p>
                </div>
              </div>
            </div>

            {/* Footer Badge */}
            <div className="flex items-center justify-center gap-2 pt-4">
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-xs text-white font-medium">
                  ISO 14064 Certified
                </span>
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-xs text-white font-medium">
                  GDPR Compliant
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
