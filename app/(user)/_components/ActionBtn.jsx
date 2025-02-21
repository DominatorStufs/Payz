"use client";
import { Button } from "@/components/ui/button";
import { ArrowDown, Plus, ScanBarcodeIcon, Share2 } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import payz from "./payz";
import { toast } from "sonner";
import domtoimage from 'dom-to-image';
import { useRef } from 'react';
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useTheme } from "next-themes";

export default function ActionBtn({ payzid }) {
    const { resolvedTheme } = useTheme();
    const qrcodeRef = useRef(null);
    const payzQr = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://payz.vercel.app/dashboard/pay?payzid=${payzid}${resolvedTheme=="dark" ? '&bgcolor=020817&color=f8fafc' : '&bgcolor=fff&color=000'}`;
    const handleDownload = () => {
        toast.loading("downloading");
        domtoimage.toJpeg(qrcodeRef.current, { quality: 0.95 })
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = 'qrcode.jpeg';
                link.href = dataUrl;
                link.click();
                toast.success("downloaded");
            })
    };

    const handleScan = () => {
        
    }

    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="flex items-center justify-center">Receive<ArrowDown className="h-4 w-4" /></Button>
                </DialogTrigger>
                <DialogContent className="rounded-md max-w-sm">
                    <DialogHeader className="mt-7">
                        <DialogTitle className="text-xl md:text-xl sm:text-xl sm:text-center -mb-1 md:text-center">Scan And Pay</DialogTitle>
                        <DialogDescription className="py-5 grid gap-4">
                            <p className="text-center text-xs -mt-6">Scan this QR code using any qr scanner <br /> and send me payz coin</p>
                            <payz payz={payzid} showshare={false} />
                            <img ref={qrcodeRef} src={payzQr} alt="qrcode" className="mx-auto rounded-lg h-[250px] w-[250px] bg-secondary mt-2" />
                            <div className="flex gap-2 mt-4 -mb-5 items-center justify-center">
                                <Button className="w-full max-w-sm" onClick={handleDownload}>Save</Button>
                                <Button size="icon" onClick={() => { navigator.share({ title: "Scan and Pay", url: "https://payz.vercel.app", text: `Pay with my payz: ${payzid}` }) }} variant="secondary"><Share2 className="h-4 w-4" /></Button>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            {/* <Button size="icon" variant="secondary" onClick={handleScan}><ScanBarcodeIcon className="h-4 w-4" /></Button> */}
            <Button variant="secondary" onClick={() => { navigator.share({ text: `Send me some payz coin on my payz id: ${payzid}`, title: "payz", url: "https://payz.vercel.app" }); }} className="flex items-center justify-center gap-[2px]" size="icon"><Plus className="h-4 w-4" /></Button>
        </>
    )
}
