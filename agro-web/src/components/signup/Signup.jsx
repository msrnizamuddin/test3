"use client";

import Image from "next/image";
import Link from "next/link";
import { User, Mail, Lock, Phone, ArrowRight } from "lucide-react";
import logoImg from "@/imports/home-logo.png";

export default function Signup() {
  return (
    <main className="relative min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center px-4 py-12 overflow-hidden transition-colors">
      <div
        className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#16A34A]/15 blur-3xl"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#F97316]/10 blur-3xl"
        aria-hidden
      />

      <div className="relative w-full max-w-md animate-fade-in-up">
        <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200/70 dark:border-gray-800 rounded-3xl shadow-2xl shadow-green-900/10 p-8">
          <div className="flex justify-center mb-6">
            <Image
              src={logoImg}
              alt="AR Agro"
              className="h-14 w-auto object-contain"
            />
          </div>

          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Create Account
            </h1>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Create your AR Agro account
            </p>
          </div>

          <form className="space-y-5">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  First Name
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full pl-11 pr-3 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-[#16A34A] focus:ring-2 focus:ring-green-100 dark:focus:ring-green-950"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Last Name
                </label>

                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-[#16A34A] focus:ring-2 focus:ring-green-100 dark:focus:ring-green-950"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-[#16A34A] focus:ring-2 focus:ring-green-100 dark:focus:ring-green-950"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Phone Number
              </label>

              <div className="relative">
                <Phone
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-[#16A34A] focus:ring-2 focus:ring-green-100 dark:focus:ring-green-950"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Password
              </label>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="password"
                  placeholder="Create a password"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-[#16A34A] focus:ring-2 focus:ring-green-100 dark:focus:ring-green-950"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Confirm Password
              </label>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-[#16A34A] focus:ring-2 focus:ring-green-100 dark:focus:ring-green-950"
                />
              </div>
            </div>

            <label className="flex items-start gap-3 text-sm text-gray-500 dark:text-gray-400 cursor-pointer">
              <input type="checkbox" className="mt-1 accent-[#16A34A]" />

              <span>
                I agree to the{" "}
                <Link
                  href="#"
                  className="text-[#16A34A] dark:text-green-400 hover:text-[#F97316]"
                >
                  Terms & Conditions
                </Link>
              </span>
            </label>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-linear-to-r from-[#F97316] to-[#c2410c] hover:brightness-110 text-white font-semibold transition-all shadow-lg shadow-orange-900/20 hover:-translate-y-0.5"
            >
              Create Account
              <ArrowRight size={18} />
            </button>
          </form>

          <div className="relative my-7">
            <div className="border-t border-gray-200 dark:border-gray-800" />

            <span className="absolute left-1/2 -translate-x-1/2 -top-2.5 px-3 bg-white dark:bg-gray-900 text-xs text-gray-400">
              OR
            </span>
          </div>

          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-[#16A34A] dark:text-green-400 hover:text-[#F97316] dark:hover:text-orange-400"
            >
              Login
            </Link>
          </p>
        </div>

        <p className="text-center text-xs text-gray-400 dark:text-gray-600 mt-6">
          © 2026 AR Agro. All rights reserved.
        </p>
      </div>
    </main>
  );
}
