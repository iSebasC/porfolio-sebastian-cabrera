"use client";
import React, { useState } from "react";

const cv = () => {
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Mi CV
        </h2>
        <embed
          src="/CV_SEBASTIANCABRERAALCALA.pdf#toolbar=0"
          type="application/pdf"
          width="100%"
          height="100vh"
          style={{ minHeight: "500px", border: '5px solid', borderColor: 'var(--border)' }}
        />
      </div>
    </section>
  );
};

export default cv;
