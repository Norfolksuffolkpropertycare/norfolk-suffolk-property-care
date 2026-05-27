"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Leaf,
  Home,
  ShieldCheck,
  Scissors,
  Droplets,
  Hammer,
  Trees,
  Star,
  CheckCircle,
  MessageCircle,
  Clock,
  Sparkles,
  PoundSterling,
  ThumbsUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: <Scissors className="h-7 w-7" />,
    title: "Garden Maintenance",
    text: "Regular or one-off garden care including tidying, weeding, pruning, lawn cutting and seasonal clear-ups.",
  },
  {
    icon: <Trees className="h-7 w-7" />,
    title: "Hedge Cutting",
    text: "Neat, reliable hedge trimming and reduction work for domestic and commercial properties.",
  },
  {
    icon: <Droplets className="h-7 w-7" />,
    title: "Pressure Washing",
    text: "Driveways, patios, paths, decking and exterior surfaces cleaned to bring them back to life.",
  },
  {
    icon: <Hammer className="h-7 w-7" />,
    title: "Property Maintenance",
    text: "General outdoor repairs, fencing, small jobs, exterior upkeep and practical maintenance work.",
  },
  {
    icon: <Home className="h-7 w-7" />,
    title: "Gutter Clearing",
    text: "Gutters cleared and checked to help prevent leaks, blockages and water damage.",
  },
  {
    icon: <ShieldCheck className="h-7 w-7" />,
    title: "Reliable Local Service",
    text: "Covering Norfolk and Suffolk with honest pricing, tidy workmanship and friendly communication.",
  },
];

const whyChooseUs = [
  {
    icon: <CheckCircle className="h-7 w-7" />,
    title: "Free, No-Obligation Quotes",
    text: "Get a straightforward estimate with no pressure. Just send photos and a description of the job.",
  },
  {
    icon: <Clock className="h-7 w-7" />,
    title: "Fast Response Times",
    text: "We reply quickly and aim to fit your job in as soon as possible.",
  },
  {
    icon: <MapPin className="h-7 w-7" />,
    title: "Local & Reliable",
    text: "Based in the area and committed to turning up when we say we will.",
  },
  {
    icon: <Sparkles className="h-7 w-7" />,
    title: "Tidy Workmanship",
    text: "We leave your property clean and tidy, taking away all waste and debris.",
  },
  {
    icon: <PoundSterling className="h-7 w-7" />,
    title: "Honest Pricing",
    text: "Clear quotes with no hidden fees. The price we quote is the price you pay.",
  },
  {
    icon: <ThumbsUp className="h-7 w-7" />,
    title: "Friendly Service",
    text: "Approachable, easy to deal with and happy to answer any questions.",
  },
];

export default function NorfolkSuffolkPropertyCare() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("[v0] Form submit started");
    setFormStatus("submitting");
    
    const formData = new FormData(e.currentTarget);
    console.log("[v0] Form data entries:", Object.fromEntries(formData.entries()));
    
    try {
      const response = await fetch("https://formspree.io/f/mzdwygqd", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      
      console.log("[v0] Response status:", response.status);
      
      if (response.ok) {
        setFormStatus("success");
        e.currentTarget.reset();
      } else {
        const errorData = await response.json();
        console.log("[v0] Error response:", errorData);
        setFormStatus("error");
      }
    } catch (err) {
      console.log("[v0] Fetch error:", err);
      setFormStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="fixed top-0 z-50 w-full border-b border-stone-200 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/20">
              <Leaf className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide text-emerald-600">
                Norfolk & Suffolk
              </p>
              <h1 className="text-base font-bold leading-none sm:text-lg">
                Property Care
              </h1>
            </div>
          </div>
          <nav className="hidden items-center gap-7 text-sm text-stone-600 md:flex">
            <a href="#services" className="hover:text-emerald-600">
              Services
            </a>
            <a href="#about" className="hover:text-emerald-600">
              About
            </a>
            <a href="#why-choose-us" className="hover:text-emerald-600">
              Why Us
            </a>
            <a href="#contact" className="hover:text-emerald-600">
              Contact
            </a>
          </nav>
          <a
            href="tel:07443763926"
            className="rounded-full bg-emerald-500 px-5 py-2.5 font-semibold text-white hover:bg-emerald-600"
          >
            Call Now
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-5 pb-20 pt-32 sm:pt-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.12),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(132,204,22,0.08),transparent_35%)]" />
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.03) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_.92fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-50 px-4 py-2 text-sm text-emerald-700">
                <MapPin className="h-4 w-4" /> Covering Norfolk & Suffolk
              </div>
              <h2 className="max-w-4xl text-5xl font-black leading-tight tracking-tight text-stone-900 sm:text-6xl lg:text-7xl">
                Professional Garden & Property Maintenance
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600 sm:text-xl">
                Reliable, tidy and affordable outdoor property care for homes,
                landlords and businesses across Norfolk and Suffolk.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-emerald-500 px-8 font-bold text-white hover:bg-emerald-600"
                >
                  <a href="#contact">Get a Free Quote</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-stone-300 bg-white px-8 text-stone-700 hover:bg-stone-100"
                >
                  <a href="#services">View Services</a>
                </Button>
              </div>
              <div className="mt-8 grid max-w-xl gap-3 text-sm text-stone-600 sm:grid-cols-3">
                <span className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" /> Free
                  quotes
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" /> One-off
                  jobs
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" /> Regular
                  work
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.1 }}
            >
              <Card className="overflow-hidden rounded-[2rem] border-stone-200 bg-white shadow-2xl shadow-stone-300/40">
                <CardContent className="p-0">
                  <div className="relative h-[480px] bg-gradient-to-br from-emerald-600 via-emerald-500 to-lime-500 p-8">
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 20% 20%, white 0, transparent 18%), radial-gradient(circle at 80% 30%, white 0, transparent 14%), radial-gradient(circle at 40% 80%, white 0, transparent 16%)",
                      }}
                    />
                    <div className="relative flex h-full flex-col justify-between rounded-[1.5rem] border border-white/25 bg-white/20 p-8 backdrop-blur-sm">
                      <div>
                        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-white text-emerald-600">
                          <Home className="h-9 w-9" />
                        </div>
                        <h3 className="text-3xl font-black text-white">
                          Outdoor work done properly.
                        </h3>
                        <p className="mt-4 text-white/90">
                          Gardens, hedges, pressure washing, gutters, fencing
                          and general property care.
                        </p>
                      </div>
                      <div className="grid gap-3">
                        {["Fast replies", "Clean finish", "Local & dependable"].map(
                          (item) => (
                            <div
                              key={item}
                              className="flex items-center gap-3 rounded-2xl bg-white/20 p-4 text-sm font-medium text-white"
                            >
                              <Star className="h-4 w-4 fill-white text-white" />{" "}
                              {item}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="services" className="bg-white px-5 py-20 text-stone-900">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="font-bold uppercase tracking-[0.25em] text-emerald-600">
                What we do
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                Services built around your property
              </h2>
              <p className="mt-4 text-lg text-stone-600">
                From regular garden maintenance to one-off tidy-ups and exterior
                cleaning, we keep your property looking its best.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Card
                  key={service.title}
                  className="rounded-3xl border-stone-200 bg-stone-50 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <CardContent className="p-7">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-black">{service.title}</h3>
                    <p className="mt-3 leading-7 text-stone-600">
                      {service.text}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-emerald-600 px-5 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-bold uppercase tracking-[0.25em] text-emerald-200">
                About us
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
                A local service you can rely on
              </h2>
              <p className="mt-6 text-lg leading-8 text-emerald-50">
                Norfolk & Suffolk Property Care provides professional garden and
                exterior maintenance services for customers who want a
                straightforward, reliable and tidy service.
              </p>
              <p className="mt-5 text-lg leading-8 text-emerald-50">
                Whether you need regular visits, a one-off clean-up, hedge
                cutting, pressure washing or general outdoor maintenance, we aim
                to make the process simple from first message to finished job.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-white">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <span className="font-semibold">Norfolk & Suffolk</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                    <Leaf className="h-6 w-6" />
                  </div>
                  <span className="font-semibold">Professional Care</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <span className="font-semibold">Fully Insured</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="why-choose-us" className="bg-stone-100 px-5 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="font-bold uppercase tracking-[0.25em] text-emerald-600">
                Why choose us
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                What sets us apart
              </h2>
              <p className="mt-4 text-lg text-stone-600">
                We pride ourselves on delivering a reliable, friendly and professional service every time.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {whyChooseUs.map((item) => (
                <Card
                  key={item.title}
                  className="rounded-3xl border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <CardContent className="p-7">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-black">{item.title}</h3>
                    <p className="mt-3 leading-7 text-stone-600">
                      {item.text}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-emerald-500 px-5 py-16 text-white">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h2 className="text-4xl font-black tracking-tight">
                Need a quote?
              </h2>
              <p className="mt-3 max-w-2xl text-lg font-medium text-white/90">
                Send a few photos and a short description of the job for a
                quick, straightforward estimate.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-white px-8 font-bold text-emerald-600 hover:bg-stone-100"
            >
              <a href="#contact">Contact Us Today</a>
            </Button>
          </div>
        </section>

        <section id="contact" className="bg-stone-800 px-5 py-20">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <p className="font-bold uppercase tracking-[0.25em] text-emerald-400">
                Contact
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
                Get your free quote
              </h2>
              <p className="mt-5 text-lg leading-8 text-stone-300">
                For quotes, availability or general enquiries, get in touch by
                phone, email, Facebook Messenger or the form.
              </p>
              <div className="mt-8 grid gap-4 text-stone-200">
                <a
                  href="tel:07443763926"
                  className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 hover:bg-white/15"
                >
                  <Phone className="h-5 w-5 text-emerald-400" /> 07443 763926
                </a>
                <a
                  href="mailto:norfolksuffolkpropertycare@gmail.com"
                  className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 hover:bg-white/15"
                >
                  <Mail className="h-5 w-5 text-emerald-400" />{" "}
                  norfolksuffolkpropertycare@gmail.com
                </a>
                <a
                  href="https://www.facebook.com/"
                  className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 hover:bg-white/15"
                >
                  <MessageCircle className="h-5 w-5 text-emerald-400" /> Message
                  us on Facebook
                </a>
              </div>
            </div>
            <Card className="rounded-[2rem] border-stone-700 bg-stone-700 text-white shadow-2xl">
              <CardContent className="p-7">
                {formStatus === "success" ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500">
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Thank you!</h3>
                    <p className="mt-2 text-stone-300">
                      Your quote request has been sent. We&apos;ll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="grid gap-5">
                    <div className="grid gap-2">
                      <label className="text-sm font-semibold text-stone-200">
                        Name
                      </label>
                      <input
                        name="name"
                        className="rounded-2xl border border-stone-600 bg-stone-800 px-4 py-3 text-white placeholder:text-stone-400 outline-none ring-emerald-400 focus:ring-2"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <label className="text-sm font-semibold text-stone-200">
                        Phone or email
                      </label>
                      <input
                        name="contact"
                        className="rounded-2xl border border-stone-600 bg-stone-800 px-4 py-3 text-white placeholder:text-stone-400 outline-none ring-emerald-400 focus:ring-2"
                        placeholder="Best way to contact you"
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <label className="text-sm font-semibold text-stone-200">
                        What do you need?
                      </label>
                      <select 
                        name="service"
                        className="rounded-2xl border border-stone-600 bg-stone-800 px-4 py-3 text-white outline-none ring-emerald-400 focus:ring-2"
                      >
                        <option>Garden maintenance</option>
                        <option>Hedge cutting</option>
                        <option>Pressure washing</option>
                        <option>Gutter clearing</option>
                        <option>Property maintenance</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="grid gap-2">
                      <label className="text-sm font-semibold text-stone-200">
                        Job details
                      </label>
                      <textarea
                        name="details"
                        className="min-h-32 rounded-2xl border border-stone-600 bg-stone-800 px-4 py-3 text-white placeholder:text-stone-400 outline-none ring-emerald-400 focus:ring-2"
                        placeholder="Tell us what needs doing, your area, and any useful details"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="rounded-full bg-emerald-500 py-6 text-base font-bold text-white hover:bg-emerald-600 disabled:opacity-50"
                    >
                      {formStatus === "submitting" ? "Sending..." : "Send Quote Request"}
                    </Button>
                    {formStatus === "error" && (
                      <p className="text-sm text-red-400">
                        Something went wrong. Please try again or contact us directly.
                      </p>
                    )}
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-white px-5 py-8 text-stone-500">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Norfolk & Suffolk Property Care. All
            rights reserved.
          </p>
          <p>norfolksuffolkpropertycare.co.uk</p>
        </div>
      </footer>
    </div>
  );
}
