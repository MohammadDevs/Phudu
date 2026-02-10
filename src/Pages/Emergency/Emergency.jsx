import React from 'react';
import Marquee from 'react-fast-marquee';

const Emergency = () => {
    return (
        <section className="max-w-6xl mx-auto px-4">

      {/* ================= Emergency Section ================= */}
      <div className="bg-slate-50 rounded-3xl p-6 md:p-10 my-14 border border-slate-200">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 bg-red-100 px-4 py-1 rounded-full">
            🚨 Emergency Support
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-slate-800">
            Immediate Care When It Matters Most
          </h2>

          <p className="mt-3 text-slate-600">
            For life-threatening situations, please seek immediate medical help.
          </p>
        </div>

        {/* Main Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Call */}
          <div className="bg-white rounded-2xl p-6 border shadow-sm">
            <p className="text-sm text-slate-500 mb-1">Emergency Hotline</p>
            <p className="text-4xl font-black text-slate-800">999</p>
            <p className="text-sm text-slate-500 mt-2">
              Available 24/7 nationwide
            </p>

            <a
              href="tel:999"
              className="mt-4 inline-block w-full text-center bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition"
            >
              📞 Call Now
            </a>
          </div>

          {/* Location */}
          <div className="bg-white rounded-2xl p-6 border shadow-sm">
            <p className="text-sm text-slate-500 mb-1">Hospital Location</p>
            <h4 className="text-lg font-semibold text-slate-800">
              Emergency Department
            </h4>
            <p className="text-sm text-slate-500 mt-2">
              Open 24 hours • ICU • Trauma Care
            </p>

            <a
              href="https://www.google.com/maps"
              target="_blank"
              className="mt-4 inline-block w-full text-center border border-slate-300 py-3 rounded-xl font-semibold text-slate-700 hover:bg-slate-100 transition"
            >
              📍 Get Directions
            </a>
          </div>

          {/* Warning */}
          <div className="bg-white rounded-2xl p-6 border shadow-sm">
            <p className="text-sm font-semibold text-amber-600 mb-2">
              ⚠️ Important Notice
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Online appointments are not recommended for emergency cases.
              Please visit the hospital or call emergency services immediately.
            </p>
          </div>
        </div>

        {/* Symptoms */}
        <div className="mt-10 bg-white rounded-2xl p-6 border">
          <h3 className="text-lg font-bold text-slate-800 mb-4">
            When to Seek Emergency Care
          </h3>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-600 text-sm">
            <li>• Chest pain or pressure</li>
            <li>• Breathing difficulties</li>
            <li>• Severe bleeding</li>
            <li>• Sudden unconsciousness</li>
            <li>• High fever with seizures</li>
            <li>• Major injury or accident</li>
          </ul>
        </div>
      </div>

      {/* ================= Extra Info Section ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
        <div className="bg-white rounded-2xl p-6 border">
          <h4 className="font-bold text-slate-800 mb-2">
            🏥 Emergency Departments
          </h4>
          <p className="text-sm text-slate-600">
            Trauma care, ICU, cardiology and critical care units available
            round the clock.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 border">
          <h4 className="font-bold text-slate-800 mb-2">
            👨‍⚕️ On-Duty Doctors
          </h4>
          <p className="text-sm text-slate-600">
            Experienced emergency physicians and nurses are always available
            for rapid response.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 border">
          <h4 className="font-bold text-slate-800 mb-2">
            🚑 Ambulance Service
          </h4>
          <p className="text-sm text-slate-600">
            GPS-enabled ambulance service ensures fast and safe transportation
            24/7.
          </p>
        </div>
      </div>

      {/* ================= Scrolling Notice ================= */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden mb-20">
        <div className="flex items-center gap-3 bg-slate-100 px-4 py-2">
          <span className="text-sm font-semibold text-red-600">
            🚨 Emergency Updates
          </span>
        </div>

        <div className="relative overflow-hidden">
          <div className="whitespace-nowrap animate-marquee px-4 py-3 text-sm text-slate-700">
            <Marquee>
                ⚠️ For emergencies, do not book online appointments • 
            Call emergency hotline immediately • 
            Keep medical reports ready • 
            Follow hospital safety instructions • 
            Ambulance service available 24/7
            </Marquee>
          </div>
        </div>
      </div>

    </section>
    );
};

export default Emergency;