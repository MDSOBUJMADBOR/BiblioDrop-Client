"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Library,
  Sparkles,
  Truck,
} from "lucide-react";

const slides = [
  {
    id: 1,
    badge: "Your Local Library, Delivered",
    title: "Discover Books.",
    highlight: "Delivered to You.",
    description:
      "Connect with local libraries and independent book owners. Request your favorite books and get them delivered to your doorstep.",
    image: "/book.jpg",
    imageAlt: "Books available on BiblioDrop",
    primaryText: "Browse Books",
    primaryLink: "/books",
    secondaryText: "How It Works",
    secondaryLink: "/how-it-works",
    icon: BookOpen,
    stat: "25K+",
    statLabel: "Books Delivered",
  },
  {
    id: 2,
    badge: "Discover Your Next Favorite",
    title: "Every Book Has",
    highlight: "A Story to Tell.",
    description:
      "Explore fiction, science, academic, technology, romance and many more categories in one convenient place.",
    image: "/delivery.jpg",
    imageAlt: "Discover books on BiblioDrop",
    primaryText: "Explore Collection",
    primaryLink: "/books",
    secondaryText: "View Categories",
    secondaryLink: "/books",
    icon: Sparkles,
    stat: "500+",
    statLabel: "Librarians",
  },
  {
    id: 3,
    badge: "Simple. Convenient. Reliable.",
    title: "Find It.",
    highlight: "Request It. Read It.",
    description:
      "Find the books you need, send a request, and enjoy a simple delivery experience without the hassle.",
    image: "/library.jpg",
    imageAlt: "Book delivery service",
    primaryText: "Start Reading",
    primaryLink: "/books",
    secondaryText: "Learn More",
    secondaryLink: "/how-it-works",
    icon: Truck,
    stat: "10K+",
    statLabel: "Happy Readers",
  },
  {
    id: 4,
    badge: "Built for Book Lovers",
    title: "Bring Your Reading",
    highlight: "Closer to Home.",
    description:
      "Discover local libraries and independent book owners while supporting a stronger community of readers.",
    image: "/reading.jpg",
    imageAlt: "Local book community",
    primaryText: "Explore Books",
    primaryLink: "/books",
    secondaryText: "Contact Us",
    secondaryLink: "/contact",
    icon: Library,
    stat: "4.8",
    statLabel: "Average Rating",
  },
];

const textVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -15,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

const imageVariants = {
  initial: {
    opacity: 0,
    x: 50,
    scale: 0.94,
  },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    x: -35,
    scale: 0.96,
    transition: {
      duration: 0.35,
      ease: "easeIn",
    },
  },
};

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = slides.length;

  // Next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  // Previous slide
  const previousSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + totalSlides) % totalSlides
    );
  };

  // Go to specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto slide
  // Hover করলেও slider বন্ধ হবে না
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const slide = slides[currentSlide];
  const Icon = slide.icon;

  return (
    <section className="w-full px-0 sm:px-4 lg:px-6">
      <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-none bg-slate-950 ">
        {/* =====================================================
            BACKGROUND
        ====================================================== */}

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(37,99,235,0.18),transparent_32%),radial-gradient(circle_at_85%_80%,rgba(79,70,229,0.16),transparent_35%)]" />

        <div className="pointer-events-none absolute -left-32 top-10 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl sm:h-80 sm:w-80" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-indigo-600/10 blur-3xl sm:h-80 sm:w-80" />

        {/* =====================================================
            SLIDE COUNTER
        ====================================================== */}

        <div className="absolute right-4 top-4 z-30 hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md sm:flex md:right-6 md:top-6 md:px-4 md:py-2">
          <span className="text-xs font-semibold text-white sm:text-sm">
            {String(currentSlide + 1).padStart(2, "0")}
          </span>

          <span className="text-xs text-slate-600">
            /
          </span>

          <span className="text-[10px] text-slate-400 sm:text-xs">
            {String(totalSlides).padStart(2, "0")}
          </span>
        </div>

        {/* =====================================================
            SLIDES
        ====================================================== */}

        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            className="
              relative z-10
              grid
              min-h-[720px]
              grid-cols-1
              items-center
              gap-8
              px-5
              py-14
              sm:min-h-[650px]
              sm:px-8
              sm:py-16
              md:min-h-[620px]
              lg:grid-cols-2
              md:gap-8
              md:px-10
              md:py-14
              lg:min-h-[600px]
              lg:gap-12
              lg:px-14
              lg:py-16
              xl:px-16
            "
          >
            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <motion.div
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="
                order-1
                flex
                w-full
                max-w-2xl
                flex-col
                justify-center
                md:order-1
              "
            >
              {/* Badge */}
              <motion.div variants={textVariants}>
                <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-2 text-[11px] font-semibold text-blue-300 backdrop-blur-sm sm:px-4 sm:text-xs md:text-sm">
                  <Icon
                    size={14}
                    className="shrink-0 sm:h-4 sm:w-4"
                  />

                  <span className="truncate">
                    {slide.badge}
                  </span>
                </div>
              </motion.div>

              {/* Heading */}
              <motion.h1
                variants={textVariants}
                className="
                  mt-5
                  text-3xl
                  font-extrabold
                  leading-[1.08]
                  tracking-tight
                  text-white
                  xs:text-4xl
                  sm:mt-6
                  sm:text-5xl
                  md:text-4xl
                  lg:text-5xl
                  xl:text-6xl
                "
              >
                {slide.title}

                <span className="mt-1 block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                  {slide.highlight}
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={textVariants}
                className="
                  mt-5
                  max-w-xl
                  text-sm
                  leading-6
                  text-slate-400
                  sm:mt-6
                  sm:text-base
                  sm:leading-7
                  lg:leading-8
                "
              >
                {slide.description}
              </motion.p>

              {/* Buttons */}
              <motion.div
                variants={textVariants}
                className="
                  mt-7
                  flex
                  w-full
                  flex-col
                  gap-3
                  sm:mt-8
                  sm:flex-row
                  sm:flex-wrap
                "
              >
                {/* Primary */}
                <Link
                  href={slide.primaryLink}
                  className="
                    group
                    inline-flex
                    min-h-12
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-blue-600
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    shadow-lg
                    shadow-blue-600/20
                    transition-all
                    duration-300
                    hover:bg-blue-500
                    hover:shadow-blue-500/30
                    sm:w-auto
                    sm:px-6
                  "
                >
                  {slide.primaryText}

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                {/* Secondary */}
                <Link
                  href={slide.secondaryLink}
                  className="
                    inline-flex
                    min-h-12
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-white/15
                    bg-white/5
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:border-blue-400/50
                    hover:bg-white/10
                    sm:w-auto
                    sm:px-6
                  "
                >
                  {slide.secondaryText}
                </Link>
              </motion.div>

              {/* Features */}
              <motion.div
                variants={textVariants}
                className="
                  mt-7
                  flex
                  flex-wrap
                  gap-x-5
                  gap-y-3
                  text-xs
                  text-slate-400
                  sm:mt-8
                  sm:gap-x-6
                  sm:text-sm
                "
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                  <span>Easy Book Discovery</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-blue-400" />
                  <span>Local Libraries</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-violet-400" />
                  <span>Doorstep Delivery</span>
                </div>
              </motion.div>
            </motion.div>

            {/* =================================================
                RIGHT IMAGE
            ================================================== */}

            <motion.div
              key={`image-${slide.id}`}
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="
                order-2
                relative
                flex
                w-full
                items-center
                justify-center
                md:order-2
                md:justify-end
              "
            >
              {/* Image Glow */}
              <div className="pointer-events-none absolute h-64 w-64 rounded-full bg-blue-500/10 blur-3xl sm:h-80 sm:w-80 lg:h-96 lg:w-96" />

              <div className="relative w-full max-w-[380px] sm:max-w-[420px] md:max-w-[360px] lg:max-w-[420px] xl:max-w-[450px]">
                {/* =================================================
                    TOP FLOATING CARD
                ================================================== */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.35,
                    duration: 0.45,
                  }}
                  className="
                    absolute
                    -left-1
                    top-4
                    z-20
                    rounded-xl
                    border
                    border-white/10
                    bg-slate-900/90
                    px-3
                    py-2.5
                    shadow-2xl
                    backdrop-blur-md
                    sm:-left-5
                    sm:top-7
                    sm:rounded-2xl
                    sm:px-4
                    sm:py-3
                    md:-left-4
                    lg:-left-8
                  "
                >
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 sm:h-9 sm:w-9 sm:rounded-xl">
                      <BookOpen
                        size={15}
                        className="text-blue-400 sm:h-[17px] sm:w-[17px]"
                      />
                    </div>

                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-slate-500 sm:text-[10px]">
                        Available
                      </p>

                      <p className="whitespace-nowrap text-[10px] font-semibold text-white sm:text-xs">
                        Discover & Request
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* =================================================
                    IMAGE
                ================================================== */}

                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-sm sm:rounded-3xl sm:p-3">
                  <div className="relative aspect-square overflow-hidden rounded-xl bg-slate-900 sm:rounded-2xl">
                    <Image
                      src={slide.image}
                      alt={slide.imageAlt}
                      fill
                      priority={currentSlide === 0}
                      sizes="
                        (max-width: 639px) 82vw,
                        (max-width: 767px) 75vw,
                        (max-width: 1023px) 40vw,
                        (max-width: 1279px) 38vw,
                        420px
                      "
                      className="object-cover"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
                  </div>
                </div>

                {/* =================================================
                    BOTTOM FLOATING CARD
                ================================================== */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.5,
                    duration: 0.45,
                  }}
                  className="
                    absolute
                    -bottom-4
                    -right-1
                    z-20
                    rounded-xl
                    border
                    border-white/10
                    bg-slate-900/95
                    px-3
                    py-3
                    shadow-2xl
                    backdrop-blur-md
                    sm:-right-5
                    sm:-bottom-5
                    sm:rounded-2xl
                    sm:px-5
                    sm:py-4
                    md:-right-4
                    lg:-right-6
                  "
                >
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 sm:h-10 sm:w-10 sm:rounded-xl">
                      <Sparkles
                        size={16}
                        className="text-blue-400 sm:h-[18px] sm:w-[18px]"
                      />
                    </div>

                    <div>
                      <p className="text-lg font-bold text-white sm:text-xl">
                        {slide.stat}
                      </p>

                      <p className="text-[9px] text-slate-500 sm:text-[11px]">
                        {slide.statLabel}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* =====================================================
            NAVIGATION BUTTONS
        ====================================================== */}

        <div
          className="
            absolute
            bottom-5
            right-4
            z-30
            flex
            items-center
            gap-1.5
            sm:bottom-7
            sm:right-8
            sm:gap-2
            lg:right-10
          "
        >
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous slide"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              text-white
              backdrop-blur-md
              transition
              hover:border-blue-400/40
              hover:bg-blue-500/20
              sm:h-10
              sm:w-10
            "
          >
            <ChevronLeft size={17} className="sm:h-[19px] sm:w-[19px]" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              text-white
              backdrop-blur-md
              transition
              hover:border-blue-400/40
              hover:bg-blue-500/20
              sm:h-10
              sm:w-10
            "
          >
            <ChevronRight size={17} className="sm:h-[19px] sm:w-[19px]" />
          </button>
        </div>

        {/* =====================================================
            DOT INDICATORS
        ====================================================== */}

        <div
          className="
            absolute
            bottom-6
            left-4
            z-30
            flex
            items-center
            gap-1
            sm:bottom-8
            sm:left-8
            sm:gap-2
            lg:left-10
          "
        >
          {slides.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className="group p-1"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-7 bg-blue-400 sm:w-8"
                    : "w-2 bg-white/30 group-hover:bg-white/60"
                }`}
              />
            </button>
          ))}
        </div>

        {/* =====================================================
            PROGRESS BAR
        ====================================================== */}

        <motion.div
          key={currentSlide}
          initial={{
            width: "0%",
          }}
          animate={{
            width: "100%",
          }}
          transition={{
            duration: 5,
            ease: "linear",
          }}
          className="absolute bottom-0 left-0 z-20 h-[2px] bg-blue-500"
        />
      </div>
    </section>
  );
};

export default HeroBanner;