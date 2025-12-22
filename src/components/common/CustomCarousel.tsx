"use client";

import React, { useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Project = {
  id: number;
  title: string;
  description: string;
  image?: string;
  video?: string;
};

interface ProjectsCarouselProps {
  projects: Project[];
}

const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(projects.length - 1, prev + 1));
  };

  const leftIndex = currentIndex - 1;
  const rightIndex = currentIndex + 1;

  return (
    <section className="w-full py-10 relative">
      <h2 className="text-3xl font-bold mb-6 text-center">My Projects</h2>

      {/* Carousel container */}
      <div className="relative mx-auto max-w-6xl">
        {/* Desktop/tablet: show 3 cards (left, center, right) */}
        <div className="hidden sm:flex justify-center items-center gap-6 select-none">
          {leftIndex >= 0 && <Card project={projects[leftIndex]} variant="side" />}
          {projects[currentIndex] && <Card project={projects[currentIndex]} variant="active" />}
          {rightIndex < projects.length && <Card project={projects[rightIndex]} variant="side" />}
        </div>

        {/* Mobile: show only active card full width */}
        <div className="sm:hidden select-none">
          {projects[currentIndex] && <Card project={projects[currentIndex]} variant="mobileActive" />}
        </div>

        {/* Bottom navigation arrows */}
        <div className="flex justify-center items-center gap-6 mt-6">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`p-3 rounded-full bg-gray-200 shadow-md transition
              ${currentIndex === 0 ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-300"}`}
            aria-label="Previous project"
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex >= projects.length - 1}
            className={`p-3 rounded-full bg-gray-200 shadow-md transition
              ${currentIndex >= projects.length - 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-300"}`}
            aria-label="Next project"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;

/* ---------- Card component ---------- */

type CardVariant = "active" | "side" | "mobileActive";

const Card: React.FC<{ project: Project; variant: CardVariant }> = ({ project, variant }) => {
  const base =
    "rounded-lg shadow-md bg-white overflow-hidden transform transition-all duration-500 ease-in-out";
  const active = "w-72 scale-105 opacity-100 blur-0 z-10";
  const side = "w-72 scale-95 opacity-60 blur-sm";
  const mobileActive = "w-full scale-100 opacity-100 blur-0";

  const classes =
    variant === "active"
      ? `${base} ${active}`
      : variant === "side"
      ? `${base} ${side}`
      : `${base} ${mobileActive}`;

  return (
    <div className={classes}>
      <div className="w-full h-48 bg-gray-200 overflow-hidden">
        {project.video ? (
          <video src={project.video} controls className="w-full h-full object-cover transition-opacity duration-500 ease-in-out" />
        ) : (
          <img
            src={project.image || "/placeholder.png"}
            alt={project.title}
            className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
          />
        )}
      </div>
      <div className="p-4 transition-opacity duration-500 ease-in-out">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm text-gray-600 mt-2">{project.description}</p>
      </div>
    </div>
  );
};