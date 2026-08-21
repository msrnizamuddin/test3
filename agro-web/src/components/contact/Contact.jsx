"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import FormField from "@/components/ui/FormField";

const contactSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),

  phone: yup.string().required("Phone is required"),

  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),

  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters"),
});

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+880 1700-000000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@agro1bd.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Dhaka, Bangladesh",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Sat–Thu, 9am–6pm",
  },
];

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gray-50 dark:bg-gray-950 transition-colors"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <span className="inline-flex font-semibold text-xs uppercase tracking-[0.2em] text-[#F97316] bg-[#F97316]/10 dark:text-orange-300 dark:bg-orange-500/10 px-3 py-1 rounded-full">
            যোগাযোগ করুন
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mt-4 mb-6 tracking-tight">
            Get In Touch
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Have questions about our products or services? Our agricultural
            experts are ready to help you grow better.
          </p>

          <div className="space-y-5">
            {contactInfo.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="group flex items-start gap-4 p-3 -m-3 rounded-xl hover:bg-white dark:hover:bg-gray-900 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-linear-to-br from-[#16A34A]/15 to-[#16A34A]/5 text-[#16A34A] dark:from-green-500/20 dark:to-green-500/5 dark:text-green-400 group-hover:scale-110 transition-transform">
                  <Icon size={20} />
                </div>

                <div>
                  <div className="text-xs text-gray-400 dark:text-gray-500 font-medium uppercase tracking-wide">
                    {label}
                  </div>

                  <div className="text-gray-800 dark:text-gray-100 font-medium">
                    {value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl shadow-green-900/5 border border-gray-100 dark:border-gray-800"
        >
          <h3 className="font-bold text-gray-900 dark:text-white text-xl mb-6">
            Send a Message
          </h3>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                label="Name"
                placeholder="Your name"
                error={errors.name?.message}
                {...register("name")}
              />

              <FormField
                label="Phone"
                placeholder="+880..."
                error={errors.phone?.message}
                {...register("phone")}
              />
            </div>

            <FormField
              label="Email"
              type="email"
              placeholder="you@example.com"
              error={errors.email?.message}
              {...register("email")}
            />

            <div>
              <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5">
                Message
              </label>

              <textarea
                rows={4}
                placeholder="Tell us about your farming needs..."
                {...register("message")}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 text-sm focus:outline-none focus:border-[#16A34A] dark:focus:border-green-400 focus:ring-2 focus:ring-green-100 dark:focus:ring-green-900/40 transition-colors resize-none"
              />

              {errors.message && (
                <p className="text-rose-500 dark:text-rose-400 text-xs mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-linear-to-r from-[#F97316] to-[#c2410c] hover:brightness-110 text-white font-semibold rounded-xl transition-all shadow-lg shadow-orange-900/20 hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
