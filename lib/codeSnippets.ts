

export const codeSnippets = {
  animatedCard: `"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { useRef, useState } from "react"

export default function AnimatedCard({ title, description, image }: {
  title: string,
  description: string,
  image: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (rect) {
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      setMousePosition({ x, y })
    }
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.03 }}
      className="relative w-full rounded-2xl border dark:border-zinc-900 hover:cursor-pointer overflow-hidden max-w-[350px] min-w-[350px]"
    >
      <div
        className="absolute inset-0 z-0 transition-opacity duration-300 ease-in-out"
        style={{
          background: \`radial-gradient(circle 150px at \${mousePosition.x}px \${mousePosition.y}px, rgba(255,255,255,0.2), transparent 80%)\`,
          opacity: isHovered ? 1 : 0,
          pointerEvents: 'none',
        }}
      />
      <div className="relative z-10 p-3">
        <div className="relative w-full aspect-[16/9] rounded overflow-hidden">
          <Image
            src={image}
            alt="Blog thumbnail"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="flex flex-col gap-1 mt-2">
          <p className="text-sm dark:text-gray-300">{title}</p>
          <p className="text-xs dark:text-gray-400">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}`,

  floatingNavbar: `"use client"
import {
  NavigationMenu,
  NavigationMenuList
} from "@/components/ui/navigation-menu"
import { Dialog, DialogClose } from "@radix-ui/react-dialog"
import { BookOpen } from 'lucide-react'
import Link from "next/link"
import { GiHamburgerMenu } from "react-icons/gi"
import { Button } from "./ui/button"
import { SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import ModeToggle from "./mode-toggle"

export function NavBar() {
  return (
    <div className="flex items-center min-w-full w-full justify-center p-2 z-99">
      <div className="flex min-h-[60px] justify-between md:w-[620px] w-[95%] mt-[1rem] border border-gray-350 dark:border-zinc-900 dark:bg-black bg-opacity-10 relative backdrop-filter backdrop-blur-lg bg-white border-opacity-20 rounded-xl p-2 shadow-lg">
        <Dialog>
          <SheetTrigger className="min-[825px]:hidden p-2 transition">
            <GiHamburgerMenu />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>tsafi</SheetTitle>
              <SheetDescription>
                Launch your blog with tsafi in just a few clicks
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col space-y-3 mt-[1rem]">
              <DialogClose asChild>
                <Link href="/">
                  <Button variant="outline" className="w-full">Home</Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/cms">
                  <Button variant="outline" className="w-full">Dashboard</Button>
                </Link>
              </DialogClose>
            </div>
          </SheetContent>
        </Dialog>
        <NavigationMenu>
          <NavigationMenuList className="max-[825px]:hidden ">
            <Link href="/" className="pl-2">
              <BookOpen />
            </Link>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-2">
          <NavigationMenu>
            <NavigationMenuList className="max-[825px]:hidden ">
              <Link href="/components" className="pl-2">
                <Button variant="ghost">
                  About Us
                </Button>
              </Link>
            </NavigationMenuList>
            <NavigationMenuList className="max-[825px]:hidden ">
              <Link href="/components" className="pl-2">
                <Button variant="ghost">
                  Contact Us
                </Button>
              </Link>
            </NavigationMenuList>
          </NavigationMenu>
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}`,

  chatGPTCarousel: `'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useRef } from 'react'

const carouselItems = [
  {
    title: "For Everyone",
    description: "Let your imagination run wild",
    bgColor: "from-pink-500 to-blue-500",
    darkBgColor: "dark:from-pink-600 dark:to-blue-600",
  },
  {
    title: "For Teams",
    description: "A superassistant for every member of your team",
    bgColor: "from-blue-500 to-green-500",
    darkBgColor: "dark:from-blue-600 dark:to-green-600",
  },
  {
    title: "For Enterprises",
    description: "Empower your entire workforce with enterprise-grade AI",
    bgColor: "from-yellow-500 to-blue-500",
    darkBgColor: "dark:from-yellow-600 dark:to-blue-600",
  },
  {
    title: "SearchGPT Prototype",
    description: "SearchGPT is a prototype of new AI search features",
    bgColor: "from-purple-500 via-pink-500 to-red-500",
    darkBgColor: "dark:from-purple-600 dark:via-pink-600 dark:to-red-600",
  },
  {
    title: "Creative Writing",
    description: "Unleash your storytelling potential",
    bgColor: "from-red-500 via-orange-500 to-yellow-500",
    darkBgColor: "dark:from-red-600 dark:via-orange-600 dark:to-yellow-600",
  },
  {
    title: "Code Assistant",
    description: "Your AI pair programmer",
    bgColor: "from-green-500 via-teal-500 to-blue-500",
    darkBgColor: "dark:from-green-600 dark:via-teal-600 dark:to-blue-600",
  },
  {
    title: "Data Analysis",
    description: "Uncover insights from your data",
    bgColor: "from-blue-500 via-indigo-500 to-purple-500",
    darkBgColor: "dark:from-blue-600 dark:via-indigo-600 dark:to-purple-600",
  },
  {
    title: "Language Learning",
    description: "Master new languages with AI",
    bgColor: "from-yellow-500 via-green-500 to-teal-500",
    darkBgColor: "dark:from-yellow-600 dark:via-green-600 dark:to-teal-600",
  },
]

export default function ChatGPTCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    let isDown = false
    let startX: number
    let scrollLeft: number

    const onMouseDown = (e: MouseEvent) => {
      isDown = true
      carousel.classList.add('active')
      startX = e.pageX - carousel.offsetLeft
      scrollLeft = carousel.scrollLeft
    }

    const onMouseLeave = () => {
      isDown = false
      carousel.classList.remove('active')
    }

    const onMouseUp = () => {
      isDown = false
      carousel.classList.remove('active')
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - carousel.offsetLeft
      const walk = (x - startX) * 2
      carousel.scrollLeft = scrollLeft - walk
    }

    carousel.addEventListener('mousedown', onMouseDown)
    carousel.addEventListener('mouseleave', onMouseLeave)
    carousel.addEventListener('mouseup', onMouseUp)
    carousel.addEventListener('mousemove', onMouseMove)

    return () => {
      carousel.removeEventListener('mousedown', onMouseDown)
      carousel.removeEventListener('mouseleave', onMouseLeave)
      carousel.removeEventListener('mouseup', onMouseUp)
      carousel.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
      <Carousel className="w-full">
        <div className="flex justify-between items-center">

          <div className="flex space-x-2">
            <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0 h-8 w-8 dark:bg-none text-gray-700 dark:text-gray-300 ">
              <ChevronLeft className="h-4 w-4" />
            </CarouselPrevious>
            <CarouselNext className="relative inset-0 translate-x-0 translate-y-0 h-8 w-8 dark:bg-none text-gray-700 dark:text-gray-300 ">
              <ChevronRight className="h-4 w-4" />
            </CarouselNext>
          </div>
        </div>
        <CarouselContent ref={carouselRef} className="cursor-grab active:cursor-grabbing mt-5">
          {carouselItems.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
              <Card className={\`bg-gradient-to-br \${item.bgColor} \${item.darkBgColor} overflow-hidden border-0 rounded-lg shadow-md\`}>
                <CardContent className="p-6 aspect-[3/4] flex flex-col justify-between">
                  <div className="text-sm font-medium text-white">{item.title}</div>
                  <div className="text-lg font-medium text-white mt-auto">{item.description}</div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
  )
}`,

  videoPlayer: `"use client"
import { Maximize, Minimize, Pause, Play, Volume2, VolumeX } from 'lucide-react';
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface CustomVideoPlayerProps {
  videoSrc: string;
}

export const VideoPlayer: React.FC<CustomVideoPlayerProps> = ({ videoSrc }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [volume, setVolume] = useState<number>(1);
  const [currentVolume, setCurrentVolume] = useState<number>(1);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const [lastMouseMoveTime, setLastMouseMoveTime] = useState(Date.now());

  const autoplay = useMemo(() => false, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      if (video.duration > 0) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    const handleVideoEnd = () => setIsPlaying(false);

    video.addEventListener("timeupdate", updateProgress);
    video.addEventListener("ended", handleVideoEnd);

    if (autoplay) {
      video.play().catch((error) => console.error("Autoplay failed:", error));
    }

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
      video.removeEventListener("ended", handleVideoEnd);
    };
  }, [autoplay]);

  useEffect(() => {
    const handleMouseMove = () => {
      setLastMouseMoveTime(Date.now());
      setShowControls(true);
    };

    const handleMouseLeave = () => {
      if (isPlaying) {
        setShowControls(false);
      }
    };

    const checkMouseInactivity = () => {
      const currentTime = Date.now();
      if (currentTime - lastMouseMoveTime > 3000 && isFullscreen) {
        setShowControls(false);
      }
    };

    if (playerRef.current) {
      playerRef.current.addEventListener("mousemove", handleMouseMove);
      playerRef.current.addEventListener("mouseleave", handleMouseLeave);
    }

    const inactivityInterval = setInterval(checkMouseInactivity, 1000);

    return () => {
      if (playerRef.current) {
        playerRef.current.removeEventListener("mousemove", handleMouseMove);
        playerRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
      clearInterval(inactivityInterval);
    };
  }, [isFullscreen, lastMouseMoveTime]);

  useEffect(() => {
    if (!isFullscreen) {
      setShowControls(true);
    }
  }, [isFullscreen]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const togglePlay = useCallback(() => {
    if (!videoRef.current) return;
    videoRef.current[isPlaying ? 'pause' : 'play']();
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const handleProgressChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const newTime = (Number(e.target.value) / 100) * videoRef.current.duration;
    videoRef.current.currentTime = newTime;
    setProgress(Number(e.target.value));
  }, []);

  const toggleMute = useCallback(() => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
    setVolume(isMuted ? currentVolume : 0);
  }, [isMuted, currentVolume]);

  const handleVolumeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const newVolume = Number(e.target.value);
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
    setCurrentVolume(newVolume);
    setIsMuted(newVolume === 0);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!playerRef.current) return;
    if (!document.fullscreenElement) {
      playerRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);

  return (
    <div ref={playerRef} className="flex flex-col justify-center items-center max-w-full relative mb-16">
      <div className="relative w-full">
        <video
          ref={videoRef}
          className="w-full cursor-pointer"
          src={videoSrc}
          onClick={togglePlay}
        >
          Your browser does not support the video tag.
        </video>
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center" onClick={togglePlay}>
            <Play size={64} className="text-white opacity-50" />
          </div>
        )}
      </div>
      <div className={\`
          text-white
          p-2 w-full absolute
          bottom-0
          left-0
          transition-opacity duration-300 ease-in-out
          \${showControls ? 'opacity-100' : 'opacity-0'}
        \`}>
        <div className="flex items-center justify-between">
          <button onClick={togglePlay} className="p-1 bg-transparent border-none cursor-pointer flex items-center justify-center mr-0 text-inherit">
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleProgressChange}
            className={\`w-full mx-2 cursor-pointer\`}
          />
          <div className="flex items-center">
            <button onClick={toggleMute} className="p-1">
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="w-16 mx-2"
            />
            <button onClick={toggleFullscreen} className="p-1">
              {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};`,

  SearchComponent: `import React from 'react';

export const SearchComponent = () => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute z-[-1] w-full h-min-screen"></div>
      <div id="poda" className="relative flex items-center justify-center group">
        <div className="absolute z-[-1] overflow-hidden h-full w-full max-h-[70px] max-w-[314px] rounded-xl blur-[3px] 
                        before:absolute before:content-[''] before:z-[-2] before:w-[999px] before:h-[999px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-60
                        before:bg-[conic-gradient(#000,#402fb5_5%,#000_38%,#000_50%,#cf30aa_60%,#000_87%)] before:transition-all before:duration-2000
                        group-hover:before:rotate-[-120deg] group-focus-within:before:rotate-[420deg] group-focus-within:before:duration-[4000ms]">
        </div>
        <div className="absolute z-[-1] overflow-hidden h-full w-full max-h-[65px] max-w-[312px] rounded-xl blur-[3px] 
                        before:absolute before:content-[''] before:z-[-2] before:w-[600px] before:h-[600px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-[82deg]
                        before:bg-[conic-gradient(rgba(0,0,0,0),#18116a,rgba(0,0,0,0)_10%,rgba(0,0,0,0)_50%,#6e1b60,rgba(0,0,0,0)_60%)] before:transition-all before:duration-2000
                        group-hover:before:rotate-[-98deg] group-focus-within:before:rotate-[442deg] group-focus-within:before:duration-[4000ms]">
        </div>
        <div className="absolute z-[-1] overflow-hidden h-full w-full max-h-[65px] max-w-[312px] rounded-xl blur-[3px] 
                        before:absolute before:content-[''] before:z-[-2] before:w-[600px] before:h-[600px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-[82deg]
                        before:bg-[conic-gradient(rgba(0,0,0,0),#18116a,rgba(0,0,0,0)_10%,rgba(0,0,0,0)_50%,#6e1b60,rgba(0,0,0,0)_60%)] before:transition-all before:duration-2000
                        group-hover:before:rotate-[-98deg] group-focus-within:before:rotate-[442deg] group-focus-within:before:duration-[4000ms]">
        </div>
        <div className="absolute z-[-1] overflow-hidden h-full w-full max-h-[65px] max-w-[312px] rounded-xl blur-[3px] 
                        before:absolute before:content-[''] before:z-[-2] before:w-[600px] before:h-[600px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-[82deg]
                        before:bg-[conic-gradient(rgba(0,0,0,0),#18116a,rgba(0,0,0,0)_10%,rgba(0,0,0,0)_50%,#6e1b60,rgba(0,0,0,0)_60%)] before:transition-all before:duration-2000
                        group-hover:before:rotate-[-98deg] group-focus-within:before:rotate-[442deg] group-focus-within:before:duration-[4000ms]">
        </div>

        <div className="absolute z-[-1] overflow-hidden h-full w-full max-h-[63px] max-w-[307px] rounded-lg blur-[2px] 
                        before:absolute before:content-[''] before:z-[-2] before:w-[600px] before:h-[600px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-[83deg]
                        before:bg-[conic-gradient(rgba(0,0,0,0)_0%,#a099d8,rgba(0,0,0,0)_8%,rgba(0,0,0,0)_50%,#dfa2da,rgba(0,0,0,0)_58%)] before:brightness-140
                        before:transition-all before:duration-2000 group-hover:before:rotate-[-97deg] group-focus-within:before:rotate-[443deg] group-focus-within:before:duration-[4000ms]">
        </div>

        <div className="absolute z-[-1] overflow-hidden h-full w-full max-h-[59px] max-w-[303px] rounded-xl blur-[0.5px] 
                        before:absolute before:content-[''] before:z-[-2] before:w-[600px] before:h-[600px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-70
                        before:bg-[conic-gradient(#1c191c,#402fb5_5%,#1c191c_14%,#1c191c_50%,#cf30aa_60%,#1c191c_64%)] before:brightness-130
                        before:transition-all before:duration-2000 group-hover:before:rotate-[-110deg] group-focus-within:before:rotate-[430deg] group-focus-within:before:duration-[4000ms]">
        </div>

        <div id="main" className="relative group">
          <input placeholder="Search..." type="text" name="text" className="bg-[#010201] border-none w-[301px] h-[56px] rounded-lg text-white px-[59px] text-lg focus:outline-none placeholder-gray-400" />
          <div id="input-mask" className="pointer-events-none w-[100px] h-[20px] absolute bg-gradient-to-r from-transparent to-black top-[18px] left-[70px] group-focus-within:hidden"></div>
          <div id="pink-mask" className="pointer-events-none w-[30px] h-[20px] absolute bg-[#cf30aa] top-[10px] left-[5px] blur-2xl opacity-80 transition-all duration-2000 group-hover:opacity-0"></div>
          <div className="absolute h-[42px] w-[40px] overflow-hidden top-[7px] right-[7px] rounded-lg
                          before:absolute before:content-[''] before:w-[600px] before:h-[600px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-90
                          before:bg-[conic-gradient(rgba(0,0,0,0),#3d3a4f,rgba(0,0,0,0)_50%,rgba(0,0,0,0)_50%,#3d3a4f,rgba(0,0,0,0)_100%)]
                          before:brightness-135 before:animate-spin-slow">
          </div>
          <div id="filter-icon" className="absolute top-2 right-2 flex items-center justify-center z-[2] max-h-10 max-w-[38px] h-full w-full [isolation:isolate] overflow-hidden rounded-lg bg-gradient-to-b from-[#161329] via-black to-[#1d1b4b] border border-transparent">
            <svg preserveAspectRatio="none" height="27" width="27" viewBox="4.8 4.56 14.832 15.408" fill="none">
              <path d="M8.16 6.65002H15.83C16.47 6.65002 16.99 7.17002 16.99 7.81002V9.09002C16.99 9.56002 16.7 10.14 16.41 10.43L13.91 12.64C13.56 12.93 13.33 13.51 13.33 13.98V16.48C13.33 16.83 13.1 17.29 12.81 17.47L12 17.98C11.24 18.45 10.2 17.92 10.2 16.99V13.91C10.2 13.5 9.97 12.98 9.73 12.69L7.52 10.36C7.23 10.08 7 9.55002 7 9.20002V7.87002C7 7.17002 7.52 6.65002 8.16 6.65002Z" stroke="#d6d6e6" strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </div>
          <div id="search-icon" className="absolute left-5 top-[15px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" height="24" fill="none" className="feather feather-search">
              <circle stroke="url(#search)" r="8" cy="11" cx="11"></circle>
              <line stroke="url(#searchl)" y2="16.65" y1="22" x2="16.65" x1="22"></line>
              <defs>
                <linearGradient gradientTransform="rotate(50)" id="search">
                  <stop stopColor="#f8e7f8" offset="0%"></stop>
                  <stop stopColor="#b6a9b7" offset="50%"></stop>
                </linearGradient>
                <linearGradient id="searchl">
                  <stop stopColor="#b6a9b7" offset="0%"></stop>
                  <stop stopColor="#837484" offset="50%"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}`,

  buttons: `

export default function Buttons() {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-4 md:p-8">
      <button className={\`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-10 py-2 px-4 bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200 animate-bounce\`}>
        Bouncing Button
      </button>

      <button className={\`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-10 py-2 px-4 bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200 group\`}>
        <span className="flex items-center space-x-2">
          <span>Spinning Icon</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:animate-spin" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
        </span>
      </button>

      <button className={\`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-10 py-2 px-4 bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200 relative overflow-hidden group\`}>
        <span className="relative z-10">Shimmering Effect</span>
        <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-gray-300 dark:via-zinc-500 to-transparent transform -skew-x-12 -translate-x-full transition-transform duration-1000 ease-out group-hover:translate-x-full"></span>
      </button>

      <button className={\`inline-flex items-center justify-center rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-10 py-2 px-4 bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200 group transform hover:scale-105 transition-transform duration-200\`}>
        <span className="flex items-center space-x-2">
          <span>Pulsing Dot</span>
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white dark:bg-slate-900 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white dark:bg-slate-900"></span>
          </span>
        </span>
      </button>
    </div>
  );
}`,
};
