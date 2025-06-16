import Link from 'next/link';
import { BorderBeam } from './ui/border-beam';

const FloatingBadge = () => {
  return (
    <Link href="https://danmollel.space" target='_blank' className="fixed bottom-4 right-4 bg-black border text-white px-3 py-2 rounded-full shadow-lg text-xs font-semibold z-50 hover:bg-zinc-800 transition-colors duration-300">
      Built by Astro
      <BorderBeam size={60} duration={4} delay={4} />
    </Link>
  );
};

export default FloatingBadge;