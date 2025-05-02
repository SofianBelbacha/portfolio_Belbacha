'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "@/lib/contactSchema";
import { useState } from "react";

export default function ContactForm() {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setError("");
        setSuccess(false);
        try {
            console.log(data)
            const res = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!res.ok) throw new Error("Une erreur est survenue");

            setSuccess(true);
            reset();
        } catch (err: any) {
            setError(err.message || "Erreur");
        }
    }; return (
        <form onSubmit={handleSubmit(onSubmit)} className="relative z-[1] flex flex-col gap-[20px] w-full p-[20px] border border-white/15 backdrop-blur-[5px] flex-1 basis-0">
            <label className="flex flex-col gap-[10px] w-full">
                <p className="font-[600] text-[16px] leading-[1.6em] text-white">
                    Nom complet
                </p>
                <div className="relative w-full h-[40px] bg-white/15 rounded-[10px]">
                    <input
                        {...register("name")}
                        type="text"
                        name="name"
                        placeholder="Jane Smith"
                        className="w-full h-full px-[12px] bg-transparent text-white outline-none"
                    />
                    <p className="text-[15px] text-[#850000]">{errors.name?.message}</p>
                </div>
            </label>
            <label className="flex flex-col gap-[10px] w-full">
                <p className="font-[600] text-[16px] leading-[1.6em] text-white">
                    Email
                </p>
                <div className="relative w-full h-[40px] bg-white/15 rounded-[10px]">
                    <input
                        {...register("email")}
                        type="text"
                        name="email"
                        placeholder="JaneSmith@[yourmail].com"
                        className="w-full h-full px-[12px] bg-transparent text-white outline-none"
                    />
                    <p className="text-[15px] text-[#850000]">{errors.email?.message}</p>
                </div>
            </label>
            <label className="flex flex-col gap-[10px] w-full">
                <p className="font-[600] text-[16px] leading-[1.6em] text-white">
                    Sujet
                </p>
                <div className="contact-select relative w-full h-[40px] bg-white/15 rounded-[10px]">
                    <select
                        {...register("service")}
                        name="service"
                        defaultValue=""
                        required
                        className="w-full h-full px-[12px] bg-transparent text-[#888888] appearance-none">
                        <option value="" disabled>Select…</option>
                        <option value="Maintenance Agreements">Signalement d'un dysfonctionnement rencontré</option>
                        <option value="Firewall Solutions">Collaboration pour vos projets</option>
                        <option value="DLP Solutions">Echange/Renseignement</option>
                        <option value="Opportunité professionnelle">Opportunité professionnelle</option>
                        <option value="Autres">Autres</option>
                    </select>
                    <p className="text-[15px] text-[#850000]">{errors.service?.message}</p>
                </div>
            </label>
            <label className="flex flex-col gap-[10px] w-full">
                <p className="font-[600] text-[16px] leading-[1.6em] text-white">
                    Message
                </p>
                <div className="relative w-full bg-white/15 rounded-[10px]">
                    <textarea
                        {...register("message")}
                        name="message"
                        rows={5}
                        cols={33}
                        placeholder="Your message"
                        className="w-full h-full px-[12px] py-[10px] bg-transparent text-white outline-none resize-none"
                    />
                </div>
                <p className="text-[15px] text-[#850000]">{errors.message?.message}</p>
            </label>
            <button type="submit"
                disabled={isSubmitting}
                className="bg-[rgb(255,255,255)] hover:bg-[rgba(255,255,255,0.8)] h-[40px] flex items-center justify-center cursor-pointer rounded-[10px]">
                <p className="font-semibold text-[14px] text-[#050505]">
                    {isSubmitting ? "Envoi..." : "Envoyer"}
                </p>
            </button>
            {success && <p className="text-[15px] leading-[1.6em] text-white">Message envoyé</p>}
            {error && <p className="text-[15px] leading-[1.6em] text-white">{error}</p>}
        </form>
    );
}