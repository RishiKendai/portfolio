import { useRef, useState } from 'react';

function ContactForm() {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);
    const [loading, setLoading] = useState(false);

    return (
        <div className="p-8 rounded-2xl bg-[hsl(var(--clr-ice-blue-hsl)_,_0.04)]" role="form">
            <h2 id="contact-heading" className="text-center text-3xl font-bold mb-4 ft-title">
                Let's Connect
            </h2>
            <p className="text-center mb-8 text-sm md:text-lg text-gray-400">
                I'm always open to new opportunities and collaborations.
            </p>
            <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                import('../helper/sendMail').then(module => {
                    module.default(
                        nameRef,
                        emailRef,
                        messageRef,
                        setLoading
                    );
                })
            }} className="space-y-6">
                <div>
                    <label htmlFor="name" className='sr-only'>Name</label>
                    <input autoComplete='given-name' ref={nameRef} type="text" id="name" className='input-field' placeholder='Your Name' required pattern='^[A-Za-z\s]{3,}$' title='Please enter at least 3 characters' />
                </div>

                <div>
                    <label htmlFor="email" className='sr-only'>Email</label>
                    <input ref={emailRef} type="email" id="email" className='input-field' placeholder='Your Email Address' required pattern='^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$' title='Please enter a valid email address' />
                </div>

                <div>
                    <label htmlFor="message" className='sr-only'>Message</label>
                    <textarea ref={messageRef} id="message" rows={3} className='input-field w-full resize-y' placeholder='Share your thoughts or project details here...' required></textarea>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full"
                    aria-busy={loading}
                >
                    {loading ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
    );
}

export default ContactForm;
