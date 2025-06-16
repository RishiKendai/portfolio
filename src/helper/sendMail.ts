export default async function useHandleFormSubmit(
    nameRef: React.RefObject<HTMLInputElement | null>,
    emailRef: React.RefObject<HTMLInputElement | null>,
    messageRef: React.RefObject<HTMLTextAreaElement | null>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
    const { toast } = await import('sonner');

    const name = nameRef.current?.value?.trim();
    const email = emailRef.current?.value?.trim();
    const message = messageRef.current?.value?.trim();

    if (!name || !email || !message) {
        toast.error("Please fill out all fields.");
        return;
    }

    setLoading(true);

    try {
        const { default: emailJs } = await import('@emailjs/browser');
        const SERVICEID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATEID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLICKEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        await emailJs.send(SERVICEID, TEMPLATEID, { name, email, message }, { publicKey: PUBLICKEY });
        toast.success("Got your message! I’ll be in touch shortly.");

        if (nameRef.current) nameRef.current.value = '';
        if (emailRef.current) emailRef.current.value = '';
        if (messageRef.current) messageRef.current.value = '';
    } catch (err) {
        console.error(err);
        toast.error("Failed to send message. Please try again later.");
    } finally {
        setLoading(false);
    }
}
