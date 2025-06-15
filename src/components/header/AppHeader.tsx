import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    Link,
    Input,
    Avatar,
    Image
} from "@heroui/react";

export const AcmeLogo = () => {
    return (
        <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
            <path
                clipRule="evenodd"
                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    );
};

export const SearchIcon = ({ size = 24, strokeWidth = 1.5, width = 24, height = 24, ...props }) => {
    return (
        <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height={height || size}
            role="presentation"
            viewBox="0 0 24 24"
            width={width || size}
            {...props}
        >
            <path
                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
            />
            <path
                d="M22 22L20 20"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
            />
        </svg>
    );
};

export const AppHeader = React.memo(() => {
    const [darkMode, setDarkMode] = useState(true);

    const toggleDark = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark');
    };

    return (
        <Navbar isBordered maxWidth="full" className="bg-gray-100 dark:bg-[#282135]">
            <NavbarContent justify="start">
                <NavbarBrand>
                    <div className="flex gap-2 items-end font-bold text-blue-600 dark:text-blue-400">
                        <Link href="/" className="text-lg flex items-center">
                            <Image src="/images/logo.png" alt="logo" width={50} height={50} />
                            <span className="text-2xl translate-y-3 -translate-x-1">iary</span>
                        </Link>
                    </div>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent justify="center">

                <Input
                    classNames={{
                        base: "md:w-[30rem] sm:w-[20rem] h-10",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper:
                            "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    placeholder="Type to search..."
                    size="sm"
                    startContent={<SearchIcon size={18} width={18} height={18} />}
                    type="search"
                />
            </NavbarContent>

            <NavbarContent justify="end">
                {/* Avatar + Toggle Theme */}
                <div className="flex items-center space-x-4">
                    {/* Avatar giả lập */}
                    <Avatar
                        isBordered
                        as="button"
                        className="transition-transform"
                        color="secondary"
                        name="Jason Hughes"
                        size="sm"
                        src="https://i.pravatar.cc/100"
                    />

                    {/* Toggle Light/Dark */}
                    <button
                        onClick={toggleDark}
                        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition-transform"
                    >
                        {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
                    </button>
                </div>
            </NavbarContent>
        </Navbar>
    );
})