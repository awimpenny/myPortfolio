/** @format */
'use server';

import { EmailTemplate } from '@/components/email/emailTemplate';
import { Resend } from 'resend';
import { IformData } from '@/components/about/contact';

export const SendEmail = async (props: IformData) => {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: ['adamwimps2@outlook.com'],
        subject: 'Contact Form Submission',
        react: EmailTemplate(props),
        text: '',
    });
};
