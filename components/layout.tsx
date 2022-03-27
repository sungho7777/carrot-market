import React from "react";
import Link from "next/link";
import { cls } from "../libs/utils";
import { useRouter } from "next/router";

interface LayoutProps{
    title?:string;
    canGoBack?:boolean;
    hasTabBar?:boolean;
    children:React.ReactNode;

}

export default function Layout({title, canGoBack, hasTabBar, children}:LayoutProps){
    const router = useRouter();
    const onClick=()=>{
        router.back();
    };
    return (
        <div>
            <div className="bg-white w-full h-12 max-w-xl justify-center text-lg px-10 font-medium fixed text-gray-800 border-b top-0 flex items-center">
                {canGoBack ? <button onClick={onClick} className="abosolute left-4">
                    <svg 
                        className="w-6 h-6" 
                        fill="none" 
                        stroke="currentColor"
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path 
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            fill-rule="evenodd" 
                            d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z" 
                            clip-rule="evenodd"></path>
                    </svg>
                </button>:null}
                {title ? (
                    <span className={cls(canGoBack ? "mx-auto" : "", "")}>{title}</span>
                ) : null}
            </div>
            <div className={cls("pt-16", hasTabBar ? "pb-24":"")}>{children}</div>
            {hasTabBar ? (
                <nav className="bg-white max-w-xl text-gray-800 border-t fixed bottom-0 w-full px-10 pb-5 pt-3 flex justify-between items-center text-xs">
                    <Link href="/">
                        <a
                            className={cls(
                                "flex flex-col items-center space-y-2 ",
                                router.pathname === "/"
                                    ? "text-orange-500"
                                    : "hover:text-gray-500 transition-colors"
                            )}
                        >
                            <svg 
                                className="w-6 h-6" 
                                fill="none" 
                                stroke="currentColor"
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg">
                                <path 
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                            </svg>
                            <span>홈</span>
                        </a>
                    </Link>
                    <Link href="/community">
                        <a
                            className={cls(
                                "flex flex-col items-center space-y-2 ",
                                router.pathname === "/community"
                                    ? "text-orange-500"
                                    : "hover:text-gray-500 transition-colors"
                            )}
                        >
                            <svg 
                                className="w-6 h-6" 
                                fill="none" 
                                stroke="currentColor"
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg">
                                <path 
                                    fill-rule="evenodd" 
                                    d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" 
                                    clip-rule="evenodd"></path>
                                <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                            </svg>
                            <span>동네생활</span>
                        </a>
                    </Link>
                    <Link href="/chats">
                        <a
                            className={cls(
                                "flex flex-col items-center space-y-2 ",
                                router.pathname === "/chats"
                                    ? "text-orange-500"
                                    : "hover:text-gray-500 transition-colors"
                            )}
                        >
                            <svg 
                                className="w-6 h-6" 
                                fill="none" 
                                stroke="currentColor"
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg">
                                <path 
                                    fill-rule="evenodd" 
                                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" 
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span>채팅</span>
                        </a>
                    </Link>
                    <Link href="/live">
                        <a
                            className={cls(
                                "flex flex-col items-center space-y-2 ",
                                router.pathname === "/live"
                                    ? "text-orange-500"
                                    : "hover:text-gray-500 transition-colors"
                            )}
                        >
                            <svg 
                                className="w-6 h-6" 
                                fill="none" 
                                stroke="currentColor"
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg">
                                <path 
                                    d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                            </svg>
                            <span>라이브</span>
                        </a>
                    </Link>
                    <Link href="/profile">
                        <a
                            className={cls(
                                "flex flex-col items-center space-y-2 ",
                                router.pathname === "/profile"
                                    ? "text-orange-500"
                                    : "hover:text-gray-500 transition-colors"
                            )}
                        >
                            <svg 
                                className="w-6 h-6" 
                                fill="none" 
                                stroke="currentColor"
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg">
                                <path 
                                    fill-rule="evenodd" 
                                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" 
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span>나의캐럿</span>
                        </a>
                    </Link>
                </nav>
                
            ) : null}
        </div>
    );
}