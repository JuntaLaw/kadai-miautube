"use client"

import Link from "next/link"
import Image from "next/image"

const Logo = () => {
    return (
        <Link href="/">
            <Image alt="Logo"
                className="hidden cursor-pointer mx-4 sm:block"
                height="30" width="140" src="/images/logo_miautube.svg" />
        </Link>
    )
}

export default Logo