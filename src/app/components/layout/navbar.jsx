import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const Navbar = () => {
    return (
        <div className="flex flex-col">
            <header className="bg-gray-900 text-white py-4 px-6 md:px-8 lg:px-10 flex items-center justify-between">
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                    <FeatherIcon className="h-6 w-6" />
                    <span className="text-lg font-semibold">Blog App</span>
                </Link>
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="/" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                        Home
                    </Link>
                    <Link href="/blog" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                        Blog
                    </Link>
                    <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                        About
                    </Link>
                </nav>
                <div className="relative md:hidden">
                    
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-full border border-gray-700 w-8 h-8">
                                <MenuIcon className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="bg-gray-900 text-white p-6">
                            <nav className="grid gap-4">
                                <Link href="/" className="text-base font-medium hover:underline underline-offset-4" prefetch={false}>
                                    Home
                                </Link>
                                <Link href="/blog" className="text-base font-medium hover:underline underline-offset-4" prefetch={false}>
                                    Blog
                                </Link>
                                <Link href="/about" className="text-base font-medium hover:underline underline-offset-4" prefetch={false}>
                                    About
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </header>
        </div>
    )
};

export default Navbar;

function FeatherIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z" />
            <path d="M16 8 2 22" />
            <path d="M17.5 15H9" />
        </svg>
    )
}

function MenuIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}