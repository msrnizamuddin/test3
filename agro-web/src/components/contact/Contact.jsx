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
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <span className="font-semibold text-sm uppercase tracking-widest text-[#CC2229]">
            যোগাযোগ করুন
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
            Get In Touch
          </h2>

          <p className="text-gray-600 mb-8">
            Have questions about our products or services? Our agricultural
            experts are ready to help you grow better.
          </p>

          <div className="space-y-5">
            {contactInfo.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#e8f0fb] text-[#1B5CA8]">
                  <Icon size={20} />
                </div>

                <div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                    {label}
                  </div>

                  <div className="text-gray-800 font-medium">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <h3 className="font-bold text-gray-900 text-xl mb-6">
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
              <label className="block text-xs font-medium text-gray-500 mb-1.5">
                Message
              </label>

              <textarea
                rows={4}
                placeholder="Tell us about your farming needs..."
                {...register("message")}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 resize-none"
              />

              {errors.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#CC2229] hover:bg-[#9e1a1f] text-white font-semibold rounded-xl transition-colors shadow-md"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
