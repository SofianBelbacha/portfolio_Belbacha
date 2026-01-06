'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "@/lib/contactSchema";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import Form from 'next/form'
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";


export default function ContactForm() {
    const t = useTranslations("common.contact");
    const pathname = usePathname();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        setFocus,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        mode: "onSubmit",
        defaultValues: {
            name: "",
            email: "",
            service: "",
            message: "",
        },
    });

    /**
     * Focus automatique sur le premier champ en erreur
     */
    useEffect(() => {
        const firstError = Object.keys(errors)[0] as keyof ContactFormData | undefined;
        if (firstError) {
            setFocus(firstError);
        }
    }, [errors, setFocus]);

    /**
     * Soumission du formulaire
     */
    const onSubmit = async (data: ContactFormData) => {
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" },
            });

            if (!res.ok) {
                const body = await res.json().catch(() => null);
                throw new Error(body?.error || "errors.generic");
            }

            reset(undefined, {
                keepErrors: false,
                keepDirty: false,
                keepTouched: false,
            });


            toast(t("toast.success.title"), {
                description: t("toast.success.description"),
                action: {
                    label: t("toast.close"),
                    onClick: () => { },
                },
            });
        } catch (err: unknown) {
            const message =
                err instanceof Error ? err.message : "errors.generic";

            toast(t("toast.error.title"), {
                description: t(message),
                action: {
                    label: t("toast.close"),
                    onClick: () => { },
                },
            });
        }
    };

    /**
     * Rendu d’erreur factorisé + accessible
     */
    const renderError = (
        error?: { message?: string }
    ) => {
        if (!error?.message) return null;

        return (
            <p role="alert" className="mt-[2px] text-[13px] leading-[1.4] text-red-400 font-medium">
                {t(error.message)}
            </p>
        );
    };

    useEffect(() => {
        reset();
    }, [pathname, reset]);


    return (
        <form noValidate onSubmit={handleSubmit(onSubmit)} className="relative z-[1] flex flex-col gap-[20px] w-full p-[20px] form-surface flex-1">
            <label className="flex flex-col gap-[10px] w-full">
                <p className="font-[600] text-[16px] leading-[1.6em]">
                    {t("form.name.label")}
                </p>
                <div className="relative w-full h-[40px] form-field rounded-[10px]">
                    <input
                        {...register("name")}
                        type="text"
                        placeholder={t("form.name.placeholder")}
                        className="w-full h-full px-[12px] bg-transparent outline-none"
                    />
                    {renderError(errors.name)}
                </div>
            </label>
            <label className="flex flex-col gap-[10px] w-full">
                <p className="font-[600] text-[16px] leading-[1.6em]">
                    {t("form.email.label")}
                </p>
                <div className="relative w-full h-[40px] form-field rounded-[10px]">
                    <input
                        {...register("email")}
                        type="text"
                        placeholder={t("form.email.placeholder")}
                        className="w-full h-full px-[12px] bg-transparent outline-none"
                    />
                    {renderError(errors.email)}
                </div>
            </label>
            <label className="flex flex-col gap-[10px] w-full">
                <p className="font-[600] text-[16px] leading-[1.6em]">
                    {t("form.subject.label")}
                </p>
                <div className="contact-select relative w-full h-[40px] form-field rounded-[10px]">
                    <select
                        {...register("service")}
                        defaultValue=""
                        className="w-full h-full px-[12px] bg-transparent outline-none appearance-none form-select">
                        <option value="" disabled>{t("form.subject.placeholder")}</option>
                        <option value="Maintenance Agreements">{t("form.subject.options.bug")}</option>
                        <option value="Firewall Solutions">{t("form.subject.options.collaboration")}</option>
                        <option value="DLP Solutions">{t("form.subject.options.information")}</option>
                        <option value="Opportunité professionnelle">{t("form.subject.options.job")}</option>
                        <option value="Autres">{t("form.subject.options.other")}</option>
                    </select>
                    {renderError(errors.service)}
                </div>
            </label>
            <label className="flex flex-col gap-[10px] w-full">
                <p className="font-[600] text-[16px] leading-[1.6em]">
                    {t("form.message.label")}
                </p>
                <div className="relative w-full form-field rounded-[10px] ">
                    <textarea
                        {...register("message")}
                        rows={5}
                        cols={33}
                        placeholder={t("form.message.placeholder")}
                        className="w-full h-full px-[12px] py-[10px] bg-transparent outline-none resize-none"
                    />
                </div>
                {renderError(errors.message)}
            </label>
            <button type="submit" disabled={isSubmitting} className="h-[40px] rounded-[10px] flex items-center justify-center cursor-pointer form-submit transition">
                <p className="font-semibold text-[14px]">
                    {isSubmitting
                        ? t("form.submit.loading")
                        : t("form.submit.default")}
                </p>
            </button>
        </form>
    );
}