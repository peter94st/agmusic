import { Link } from "react-router"
import { Music2 } from "lucide-react"
import CustomIcon from "./CustomIcon"
import youtubeIcon from '@/assets/icon/youtubeIcon.webp'
import instagramIcon from "@/assets/icon/instagramIcon.png"

export default function Footer() {
    return (
        <footer className="border-t border-border bg-background">

            <div className="
                max-w-7xl mx-auto
                px-6 py-12
                flex flex-col md:flex-row
                justify-between items-center gap-8
            ">
                <Link to="/" className="font-display text-3xl" >
                AG-MUSIC <span className="text-primary">.</span>
                </Link>

                <p className="text-muted-foreground text-xs font-mono">
                © 2026 A.GUILLEN. ALL RIGHTS RESERVED.
                </p>

                <div className="flex items-center gap-5">
                <a href="#" aria-label="Instagram" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                >
                    {/* <Instagram size={19} /> */}
                    <CustomIcon
                        source={instagramIcon}
                        alt="Instagram Icon"
                        size={6}
                        invert={true}
                    />
                </a>
                <a href="#" aria-label="SoundCloud" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                >
                    <Music2 size={19} />
                </a>
                <a href="#" aria-label="Youtube" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                >
                    {/* <Youtube size={19} /> */}
                    <CustomIcon
                        source={youtubeIcon}
                        alt="Instagram Icon"
                        size={7}
                        invert={true}
                    />
                </a>
                </div>
            </div>

            </footer>
    )
}