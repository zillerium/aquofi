"use client";

import React, { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BanknotesIcon, Bars3Icon, BellAlertIcon, BugAntIcon, MagnifyingGlassIcon, MusicalNoteIcon, NewspaperIcon, PaintBrushIcon, PaperAirplaneIcon, PaperClipIcon, PlayCircleIcon, PlayIcon, ShareIcon } from "@heroicons/react/24/outline";
import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { useOutsideClick } from "~~/hooks/scaffold-eth";
import { CurrencyDollarIcon, EyeIcon } from "@heroicons/react/24/outline";
import { PlayPauseIcon } from "@heroicons/react/24/solid";

type HeaderMenuLink = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

export const menuLinks: HeaderMenuLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Trade",
    href: "/trade",
    icon: <PlayCircleIcon className="h-6 w-6" />,
  },
  // {
  //   label: "DAO",
  //   href: "/dao",
  //   icon: <BanknotesIcon className="h-4 w-4" />,
  // },
  {
    label: "Compositions",
    href: "/compositions",
    icon: <ShareIcon className="h-6 w-6" />,
  },
  {
    label: "Derivatives",
    href: "/derivatives",
    icon: <PaperClipIcon className="h-6 w-6" />,
  },
  {
    label: "Valuations",
    href: "/valuations",
    icon: <EyeIcon className="h-6 w-6" />,
  },
];

export const HeaderMenuLinks = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-row gap-2 pl-24 justify-center">
      {menuLinks.map(({ label, href, icon }) => {
        const isActive = pathname === href;
        return (
          <li key={href}>
            <Link
              href={href}
              passHref
              className={`${
                isActive ? "bg-primary shadow-md" : ""
              } hover:bg-primary hover:shadow-md focus:!bg-primary active:!text-neutral py-1.5 px-3 text-sm rounded-full gap-2 grid grid-flow-col`}
            >
              {icon}
              <span>{label}</span>
            </Link>
          </li>
        );
      })}
    </div>
  );
};

/**
 * Site header
 */
export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const burgerMenuRef = useRef<HTMLDivElement>(null);
  useOutsideClick(
    burgerMenuRef,
    useCallback(() => setIsDrawerOpen(false), []),
  );

  return (
    <div className="sticky lg:static top-0 navbar bg-base-100 min-h-0 flex-shrink-0 justify-between z-20 shadow-md shadow-primary px-0 sm:px-2">
      <div className="w-auto lg:w-1/2 navbar-start">
        <div className="lg:hidden dropdown" ref={burgerMenuRef}>
          <label
            tabIndex={0}
            className={`ml-1 btn btn-ghost ${isDrawerOpen ? "hover:bg-primary" : "hover:bg-transparent"}`}
            onClick={() => {
              setIsDrawerOpen(prevIsOpenState => !prevIsOpenState);
            }}
          >
            <Bars3Icon className="h-1/2" />
          </label>
          {isDrawerOpen && (
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              onClick={() => {
                setIsDrawerOpen(false);
              }}
            >
              <HeaderMenuLinks />
            </ul>
          )}
        </div>
        <Link href="/" passHref className="hidden lg:flex items-center gap-2 ml-4 mr-6 shrink-0">
          <div className="flex relative w-10 h-10">
            <Image alt="SE2 logo" className="cursor-pointer" fill src="/logo.png" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold leading-tight text-xl">Aquo</span>
            <span className="text-xs">RWA Hub</span>
          </div>
        </Link>
        <ul className="hidden lg:flex lg:flex-nowrap menu menu-horizontal px-1 gap-2">
          <HeaderMenuLinks />
        </ul>
      </div>
      <div className="navbar-end flex-grow mr-4">
        <RainbowKitCustomConnectButton />
        <FaucetButton />
      </div>
    </div>
  );
};
