import "@/styles/globals.scss"
import React from "react";
import Nav from "@/components/Nav";

export const metadata = {
    title:"Dev jobs web app",
    description:"Discover Tech Jobs all around the world "
}
const RootLayout = ({children}) => {
    return (
        <html lang={"en"} >
        <body>
                <main>
                    <Nav/>
                   
                        {children}
                       
                </main>
        </body>
        </html>
    )
}

export default RootLayout;