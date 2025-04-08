// import PrimaryButton from '@/Components/PrimaryButton';
// import GuestLayout from '@/Layouts/GuestLayout';
// import { Head, Link, useForm } from '@inertiajs/react';

// export default function VerifyEmail({ status }) {
//     const { post, processing } = useForm({});

//     const submit = (e) => {
//         e.preventDefault();

//         post(route('verification.send'));
//     };

//     return (
//         <GuestLayout>
//             <Head title="Email Verification" />

//             <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
//                 Thanks for signing up! Before getting started, could you verify
//                 your email address by clicking on the link we just emailed to
//                 you? If you didn't receive the email, we will gladly send you
//                 another.
//             </div>

//             {status === 'verification-link-sent' && (
//                 <div className="mb-4 text-sm font-medium text-green-600 dark:text-green-400">
//                     A new verification link has been sent to the email address
//                     you provided during registration.
//                 </div>
//             )}

//             <form onSubmit={submit}>
//                 <div className="mt-4 flex items-center justify-between">
//                     <PrimaryButton disabled={processing}>
//                         Resend Verification Email
//                     </PrimaryButton>

//                     <Link
//                         href={route('logout')}
//                         method="post"
//                         as="button"
//                         className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
//                     >
//                         Log Out
//                     </Link>
//                 </div>
//             </form>
//         </GuestLayout>
//     );
// }


import PrimaryButton from '@/Components/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();
        post(route('verification.send'));
    };

    return (
        <GuestLayout>
            <Head title="Vérification de l'email" />

            <div className="max-w-md mx-auto bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
                    📧 Vérifiez votre adresse email
                </h2>

                <div className="mb-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Merci de vous être inscrit ! Avant de commencer, veuillez confirmer votre adresse email en cliquant sur le lien que nous venons de vous envoyer. <br />
                    Si vous n’avez pas reçu l’email, nous pouvons vous en renvoyer un.
                </div>

                {status === 'verification-link-sent' && (
                    <div className="mb-4 text-sm font-medium text-green-600 dark:text-green-400">
                        ✅ Un nouveau lien de vérification a été envoyé à votre adresse email.
                    </div>
                )}

                <form onSubmit={submit} className="space-y-4">
                    <PrimaryButton className="w-full justify-center" disabled={processing}>
                        🔁 Renvoyer l'email de vérification
                    </PrimaryButton>

                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        className="w-full text-center mt-4 text-sm text-gray-600 underline hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                        🚪 Se déconnecter
                    </Link>
                </form>
            </div>
        </GuestLayout>
    );
}

