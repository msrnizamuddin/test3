"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Mail, MapPin, Phone, Clock, ArrowRight } from "lucide-react";

import FormField from "@/components/ui/FormField";
import Button from "@/components/common/Button";
import SectionHeader from "@/components/common/SectionHeader";

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
      className="overflow-hidden bg-background px-4 py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="যোগাযোগ করুন"
          title="Get In Touch"
          description="Have questions about our products or services? Our agricultural experts are ready to help you grow better."
        />

        <div className="grid items-start gap-10 lg:grid-cols-5">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl bg-gradient-to-br from-navy-900 via-navy-700 to-navy-500 p-8 text-white shadow-xl md:p-10">
              <div className="mb-8">
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-brand">
                  <Mail size={21} />
                </div>

                <h3 className="mb-3 text-2xl font-black">Let&apos;s Talk</h3>

                <p className="text-sm leading-relaxed text-navy-100">
                  Whether you need help choosing the right seeds, fertilizer,
                  tools, or want expert agricultural advice, our team is here to
                  help.
                </p>
              </div>

              <div className="space-y-5">
                {contactInfo.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-navy-200">
                      <Icon size={19} />
                    </div>

                    <div>
                      <div className="mb-0.5 text-[11px] font-semibold uppercase tracking-widest text-sand-300">
                        {label}
                      </div>

                      <div className="text-sm font-medium text-white">
                        {value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="mb-1 text-sm font-bold text-white">
                  🌱 Need agricultural advice?
                </div>

                <p className="text-xs leading-relaxed text-navy-200">
                  Our team can help you select suitable seeds, fertilizers and
                  farming solutions for your crop.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-3xl border border-sand-100 bg-white p-6 shadow-lg md:p-8"
            >
              <div className="mb-7">
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-brand-600">
                  Send us a message
                </p>

                <h3 className="text-2xl font-black text-navy-700">
                  How Can We Help?
                </h3>
              </div>

              <div className="space-y-5">
                {/* Name + Phone */}
                <div className="grid gap-4 sm:grid-cols-2">
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

                {/* Email */}
                <FormField
                  label="Email"
                  type="email"
                  placeholder="you@example.com"
                  error={errors.email?.message}
                  {...register("email")}
                />

                {/* Message */}
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-gray-500">
                    Message
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Tell us about your farming needs..."
                    {...register("message")}
                    className={`w-full resize-none rounded-xl border px-4 py-3 text-sm text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:ring-2 ${
                      errors.message
                        ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                        : "border-gray-200 focus:border-brand-500 focus:ring-brand-500/10"
                    }`}
                  />

                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full sm:w-auto"
                  >
                    Send Message
                    <ArrowRight size={17} className="ml-2" />
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
