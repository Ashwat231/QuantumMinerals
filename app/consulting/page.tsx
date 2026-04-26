"use client";
import Script from "next/script";

export default function ConsultingPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-10">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold text-center mb-4">Schedule a Meeting with Us</h1>
          <p className="text-gray-600 text-center mb-4">Pick a time that works best for you</p>

          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/ashwatrajbhandari5/30min"
            style={{ minWidth: "320px", height: "700px" }}
          ></div>
        </div>
      </section>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      />
    </div>
  );
}