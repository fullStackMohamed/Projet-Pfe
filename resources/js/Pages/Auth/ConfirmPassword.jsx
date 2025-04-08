// import InputError from '@/Components/InputError';
// import InputLabel from '@/Components/InputLabel';
// import PrimaryButton from '@/Components/PrimaryButton';
// import TextInput from '@/Components/TextInput';
// import GuestLayout from '@/Layouts/GuestLayout';
// import { Head, useForm } from '@inertiajs/react';

// export default function ConfirmPassword() {
//     const { data, setData, post, processing, errors, reset } = useForm({
//         password: '',
//     });

//     const submit = (e) => {
//         e.preventDefault();

//         post(route('password.confirm'), {
//             onFinish: () => reset('password'),
//         });
//     };

//     return (
//         <GuestLayout>
//             <Head title="Confirm Password" />

//             <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
//                 This is a secure area of the application. Please confirm your
//                 password before continuing.
//             </div>

//             <form onSubmit={submit}>
//                 <div className="mt-4">
//                     <InputLabel htmlFor="password" value="Password" />

//                     <TextInput
//                         id="password"
//                         type="password"
//                         name="password"
//                         value={data.password}
//                         className="mt-1 block w-full"
//                         isFocused={true}
//                         onChange={(e) => setData('password', e.target.value)}
//                     />

//                     <InputError message={errors.password} className="mt-2" />
//                 </div>

//                 <div className="mt-4 flex items-center justify-end">
//                     <PrimaryButton className="ms-4" disabled={processing}>
//                         Confirm
//                     </PrimaryButton>
//                 </div>
//             </form>
//         </GuestLayout>
//     );
// }


import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('password.confirm'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Confirmation du mot de passe" />

            <div className="max-w-md mx-auto bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
                    🔐 Confirmation requise
                </h2>

                <div className="mb-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    C'est une zone sécurisée de l’application. Veuillez confirmer votre mot de passe avant de continuer.
                </div>

                <form onSubmit={submit} className="space-y-4">
                    <div>
                        <InputLabel htmlFor="password" value="Mot de passe" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            isFocused={true}
                            onChange={(e) => setData('password', e.target.value)}
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <PrimaryButton className="w-full justify-center" disabled={processing}>
                        ✅ Confirmer
                    </PrimaryButton>
                </form>
            </div>
        </GuestLayout>
    );
}
