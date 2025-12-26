"use client";

import { motion, useScroll, useTransform, animate, useMotionValue } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import useSound from "use-sound";
import { Button } from "@/components/ui/button";

const trustItems = [
  { title: "Verified Doctors", desc: "Manually verified Ayurvedic practitioners only." },
  { title: "Authentic Medicines", desc: "Listed by licensed pharmacies." },
  { title: "Private Consultations", desc: "End-to-end encrypted sessions." },
  { title: "Expert Content", desc: "Reviewed by Ayurveda specialists." },
];

function Stat({ value, label }: { value: number; label: string }) {
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate(latest) {
        setDisplay(Math.floor(latest));
      },
    });
    return () => controls.stop();
  }, [value, motionValue]);

  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-emerald-300">{display.toLocaleString()}</div>
      <div className="text-white/50 text-sm">{label}</div>
    </div>
  );
}

function Grain() {
  const mat = useRef<any>(null);
  useFrame(({ clock }) => {
    if (mat.current) mat.current.uniforms.time.value = clock.elapsedTime;
  });

  return (
    <mesh>
      <planeGeometry args={[10, 10]} />
      <shaderMaterial
        ref={mat}
        transparent
        uniforms={{ time: { value: 0 } }}
        fragmentShader={`
          uniform float time;
          float rand(vec2 co){ return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453); }
          void main() {
            float noise = rand(gl_FragCoord.xy + time);
            gl_FragColor = vec4(vec3(noise), 0.035);
          }
        `}
        vertexShader={`void main(){ gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`}
      />
    </mesh>
  );
}

export default function HeroSection() {
  const [role, setRole] = useState<"patient" | "doctor">("patient");
  const { scrollYProgress } = useScroll();
  const bg = useTransform(scrollYProgress, [0, 0.5, 1], ["#0b1411", "#0e1f18", "#08140f"]);
  const [playHover] = useSound("/hover.mp3", { volume: 0.25 });

  return (
    <motion.section style={{ backgroundColor: bg }} className="relative min-h-screen overflow-hidden">

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,200,160,0.25),transparent_60%)]" />
      {/* <div className="absolute right-[-10%] top-[15%] w-[700px] h-[700px] bg-[url('/dhanvantari-ji.png')] bg-contain bg-no-repeat opacity-30 animate-float-slow" /> */}

      <Canvas className="absolute inset-0 pointer-events-none z-20">
        <Grain />
      </Canvas>

      <div className="relative z-30 container mx-auto px-6 py-32 mt-[-120px]">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-6">
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-emerald-300 text-sm">Verified Ayurveda Network</span>
            <h1 className="text-5xl md:text-6xl font-serif text-white">
              Ayurveda, <span className="text-emerald-300">Authenticated.</span>
            </h1>
            <p className="text-white/70 text-lg max-w-xl">
The world's first community platform dedicated to connecting verified Ayurvedic practitioners with wellness seekers.

            </p>

            <div className="flex gap-3 pt-4">
              {["patient", "doctor"].map(r => (
                <button key={r} onClick={() => setRole(r as any)}
                  className={`px-6 py-2 rounded-full border transition ${
                    role === r
                      ? "bg-emerald-400 text-black border-emerald-400"
                      : "border-white/20 text-white hover:bg-white/10"
                  }`}>
                  I am a {r}
                </button>
              ))}
            </div>

            <Button className="px-10 h-12 rounded-full bg-emerald-400 text-black hover:bg-emerald-500 shadow-lg shadow-emerald-400/30">
              {role === "doctor" ? "Apply for Verification" : "Find a Doctor"}
            </Button>

            <div className="flex gap-8 pt-6">
              <Stat value={1248} label="Doctors Verified" />
              <Stat value={8230} label="Consultations" />
              <Stat value={312} label="Pharmacies" />
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }} className="grid grid-cols-2 gap-6">
            {trustItems.map((item, i) => (
              <Tilt key={i} tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable glareMaxOpacity={0.12} scale={1.05} className="rounded-2xl">
                <motion.div
                  onMouseEnter={playHover}
                  whileHover={{ y: -8 }}
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-emerald-400/40 transition"
                >
                  <h3 className="text-white text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </motion.div>
              </Tilt>
            ))}
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
